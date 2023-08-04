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
            :src="getImageFromBase64(user.avatar)"
            class="w-16 h-16 object-cover rounded-full"
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
import UserDetail from "./UserDetail.vue";
import { fetchUsers } from "../utils/getApi";

export default {
  components: { UserDetail },
  data() {
    return {
      showModal: false,
      users: [],
      showUserDetails: false,
    };
  },
  async mounted() {
    this.users = await fetchUsers();
  },
  methods: {
    showUserDetail(user) {
      this.selectedUser = user;
      this.showUserDetails = true;
    },
    closeUserDetail() {
      this.selectedUser = null;
      this.showUserDetails = false;
    },
    getImageFromBase64(base64Image) {
      const image = new Image();
      image.src = base64Image;
      return base64Image;
    },
  },
};
</script>

<style></style>
