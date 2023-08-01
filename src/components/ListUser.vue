<template>
  <div class="pt-5 px-5">
    <div class="flex justify-end pb-10">
      <div
        class="bg-blue-primary-login text-white py-2 px-4 rounded-md cursor-pointer"
        @click="showModal = true"
      >
        <span>Tạo người dùng</span>
      </div>
    </div>
    <header
      class="mb-5 border-b-4 border-orange-primary-color flex text-center font-medium gap-2 items-center relative"
    >
      <span
        class="cursor-pointer text-center"
        :class="{
          'border border-t-4 border-orange-primary-color text-orange-primary-color p-2':
            isToggleTab,
        }"
        @click="toggleMode(true)"
        >Lịch sử tương tác</span
      >
      <span
        class="cursor-pointer"
        :class="{
          'border border-t-4 border-orange-primary-color text-orange-primary-color p-2':
            !isToggleTab,
        }"
        @click="toggleMode(false)"
        >Ghi chú</span
      >
    </header>
    <div v-if="isToggleTab" class="max-h-[500px]">
      <table class="w-full">
        <tr class="bg-gray-bg-table">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
        <tr v-for="user in displayedUsers" :key="user.username">
          <td>{{ user.fullname }}</td>
          <td>
            <a class="cursor-pointer" @click="showUserDetail(user)">{{
              user.email
            }}</a>
          </td>
          <td>{{ user.phone_number }}</td>
          <td>{{ user.address }}</td>
        </tr>
      </table>
    </div>
    <div v-if="isToggleTab" class="flex justify-center gap-5 mt-2">
      <span
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ 'text-blue-primary-login': pageNumber === currentPage }"
        @click="goToPage(pageNumber)"
        class="cursor-pointer"
        >{{ pageNumber }}</span
      >
    </div>
  </div>
  <popup-component
    v-show="showModal"
    @close-modal="showModal = false"
  ></popup-component>
  <user-detail
    v-if="selectedUser"
    :user="selectedUser"
    @close-user-detail="selectedUser = null"
  />
</template>

<script>
import PopupComponent from "./PopupComponent.vue";
import axios from "axios";
import UserDetail from "./UserDetail.vue";
export default {
  components: { PopupComponent, UserDetail },
  data() {
    return {
      showModal: false,
      users: [],
      currentPage: 1,
      itemsPerPage: 20,
      isToggleTab: true,
      selectedUser: null,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.itemsPerPage);
    },

    displayedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.users.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    showUserDetail(user) {
      this.selectedUser = user;
    },
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        console.log(response.data);
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    toggleMode(isInteractionHistoryActive) {
      this.isToggleTab = isInteractionHistoryActive;
    },
  },
};
</script>

<style>
table,
td,
th {
  border: 1px solid;
  text-align: center;
}

td,
th {
  padding: 5px 10px;
}

table {
  width: 80%;
  border-collapse: collapse;
}
</style>
