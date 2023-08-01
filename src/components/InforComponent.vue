<template>
  <div class="pt-5 flex justify-center">
    <div v-if="users.length > 0">
      <div
        class="infor-top flex items-center"
        v-for="user in users"
        :key="user.user_name"
      >
        <div class="avatar ml-1 mr-3 mt-5">
          <img
            :src="user.profile_picture"
            class="w-16 h-16 object-cover"
            alt="avatar"
          />
        </div>
        <div class="font-bold text-base mt-5" @click="showUserDetail(user)">
          {{ user.fullname }}
        </div>
      </div>
    </div>
    <div v-else>Chưa có user nào</div>
  </div>
  <user-detail
    v-if="showUserDetails"
    :user="selectedUser"
    @close-user-detail="closeUserDetail"
  ></user-detail>
</template>

<script>
import axios from "axios";
import UserDetail from "./UserDetail.vue";
export default {
  components: { UserDetail },
  data() {
    return {
      showModal: false,
      users: [],
      showUserDetails: false,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        if (response.data.length > 0) {
          this.users = response.data;
        }
      } catch (error) {
        console.error("Error fetching users:", error);
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
};
</script>

<style></style>
