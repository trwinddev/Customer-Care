<template>
  <div>
    <div
      class="flex relative mt-6 border rounded-md w-11/12 border-slate-400 mx-auto"
    >
      <i class="fa fa-search absolute top-1/2 -translate-y-1/2 pl-2"></i>
      <input type="text" class="p-2 w-full ml-6" v-model="searchUser" />
    </div>
    <p v-if="isLoading" class="flex justify-center mt-2">Loading users...</p>
    <div v-if="!searchUser">
      <div class="user-list-container h-[600px] overflow-y-auto">
        <div v-for="user in users" :key="user.id">
          <user-detail-no-modal :user="user"></user-detail-no-modal>
        </div>
      </div>
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
            @click="showUserDetail(user)"
          />
        </div>
        <div>{{ user.phone_number }}</div>
      </li>
    </ul>
    <p v-else-if="!isLoading && searchUser" class="pl-2 mt-5">
      No users found.
    </p>
    <teleport to="#admin-page">
      <component
        :is="userDetailComponent"
        v-if="showUserDetails"
        :user="selectedUser"
        @close-user-detail="closeUserDetail"
      ></component>
    </teleport>
  </div>
</template>

<script>
import axios from "axios";
import UserDetailNoModal from "./UserDetailNoModal.vue";
import UserDetail from "./UserDetail.vue";

export default {
  components: { UserDetailNoModal, UserDetail },
  data() {
    return {
      searchUser: "",
      users: [],
      isLoading: true,
      showUserDetails: false,
      selectedUser: null,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("https://ddsvts-8080.csb.app/users");
        this.users = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },
    showUserDetail(user) {
      this.selectedUser = user;
      this.showUserDetails = true;
    },
    closeUserDetail() {
      this.selectedUser = null;
      this.showUserDetails = false;
    },
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.phone_number.includes(this.searchUser)
      );
    },
    userDetailComponent() {
      return window.matchMedia("(max-width: 1023px)").matches
        ? "UserDetail"
        : "UserDetailNoModal";
    },
  },
};
</script>
<style scoped>
.no-modal {
  margin-left: 20px;
}
</style>
