<template>
  <div class="pt-10">
    <div
      class="infor-top flex items-center"
      v-for="user in users"
      :key="user.user_name"
    >
      <div class="avatar ml-1 mr-3">
        <img
          :src="user.profile_picture"
          class="w-16 h-16 object-cover"
          alt="avatar"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-bold text-base">{{ user.fullname }}</div>
        <div class="uppercase text-white text-xs font-medium flex gap-3">
          <span class="bg-orange-primary-color px-2 py-[2px] rounded-xl">{{
            user.tags[0]
          }}</span>
          <span class="bg-green-green-notice px-2 py-[2px] rounded-xl">{{
            user.tags[1]
          }}</span>
          <span
            class="text-red-red-notice bg-red-red-bg px-2 py-[2px] rounded-xl"
            >{{ user.tags[2] }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showModal: false,
      users: [],
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
          this.users = [response.data[0]];
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>

<style></style>
