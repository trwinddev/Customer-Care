<template>
  <div>
    <div class="flex justify-center mt-2">
      <input
        type="text"
        class="border w-11/12 border-slate-400 rounded-md p-2 pl-8"
        v-model="searchUser"
      />
      <span class="absolute left-24 top-20 -translate-x-2 -translate-y-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_630_4663)">
            <path
              d="M26.4196 23.2741C28.5982 20.3012 29.574 16.6152 29.1518 12.9537C28.7295 9.29217 26.9402 5.92512 24.142 3.52615C21.3438 1.12718 17.743 -0.126788 14.0599 0.0151266C10.3769 0.157041 6.88323 1.68437 4.27792 4.29155C1.67261 6.89872 0.147781 10.3935 0.00850157 14.0766C-0.130778 17.7598 1.12576 21.3597 3.52673 24.1562C5.92771 26.9527 9.29604 28.7395 12.9579 29.1592C16.6197 29.5788 20.3049 28.6004 23.2763 26.4196H23.2741C23.3416 26.5096 23.4136 26.5951 23.4946 26.6784L32.1571 35.3409C32.579 35.763 33.1513 36.0003 33.7481 36.0006C34.345 36.0008 34.9175 35.7639 35.3397 35.342C35.7619 34.9201 35.9992 34.3478 35.9994 33.7509C35.9996 33.154 35.7627 32.5815 35.3408 32.1594L26.6783 23.4969C26.5979 23.4154 26.5114 23.3402 26.4196 23.2719V23.2741ZM27.0001 14.6251C27.0001 16.2502 26.68 17.8594 26.0581 19.3608C25.4362 20.8622 24.5246 22.2264 23.3755 23.3756C22.2264 24.5247 20.8622 25.4362 19.3608 26.0581C17.8594 26.68 16.2502 27.0001 14.6251 27.0001C13 27.0001 11.3908 26.68 9.88936 26.0581C8.38796 25.4362 7.02375 24.5247 5.87462 23.3756C4.7255 22.2264 3.81396 20.8622 3.19206 19.3608C2.57016 17.8594 2.25007 16.2502 2.25007 14.6251C2.25007 11.3431 3.55386 8.19542 5.87462 5.87466C8.19538 3.5539 11.343 2.2501 14.6251 2.2501C17.9071 2.2501 21.0548 3.5539 23.3755 5.87466C25.6963 8.19542 27.0001 11.3431 27.0001 14.6251Z"
              fill="#545454"
            />
          </g>
          <defs>
            <clipPath id="clip0_630_4663">
              <rect width="36" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
    <ul class="pl-2 mt-5" v-if="filteredUsers.length > 0 && searchUser">
      <span class="font-semibold">Kết quả tìm kiếm danh bạ</span>
      <li
        class="mt-6 px-2 border-b-2 pb-2"
        v-for="user in filteredUsers"
        :key="user.id"
      >
        <div
          class="mb-4 text-orange-primary-color font-semibold flex justify-between"
        >
          {{ user.fullname }}
          <input
            size="30px"
            type="radio"
            name="fullname"
            class="cursor-pointer"
          />
        </div>
        <div>{{ user.phone_number }}</div>
      </li>
    </ul>
    <p v-else-if="!isLoading && searchUser" class="pl-2 mt-5">
      No users found.
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchUser: "",
      users: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        this.users = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.phone_number.includes(this.searchUser)
      );
    },
  },
};
</script>
<style scoped></style>
