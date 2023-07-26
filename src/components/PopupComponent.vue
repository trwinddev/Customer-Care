<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="flex justify-between border-b-2 p-5 items-center">
        <h2 class="text-blue-primary-login font-medium">Thông tin cá nhân</h2>
        <div
          class="close font-semibold cursor-pointer hover:text-gray-text-gray"
          @click="$emit('close-modal')"
        >
          ｘ
        </div>
      </div>
      <div class="avatar flex justify-center content-center items-center">
        <div
          class="w-40 h-40 bg-gray-text-gray mt-8 rounded-full relative cursor-pointer"
          @click="openImageInput"
        >
          <img
            v-if="imagePreview"
            :src="imagePreview"
            alt="Preview"
            class="img-demo w-40 h-40 object-cover rounded-full"
          />
          <div
            class="bg-gray-text-gray p-[6px] inline-block rounded-full absolute bottom-4 right-1"
            v-if="!imagePreview"
          >
            <img
              class="w-5"
              src="https://www.shareicon.net/data/32x32/2016/01/03/697349_camera_512x512.png"
              alt=""
            />
          </div>
        </div>
        <input
          type="file"
          @change="previewImage"
          class="hidden"
          ref="imageInput"
        />
      </div>
      <form
        @submit.prevent="handleSubmit"
        class="p-5 grid grid-cols-2 gap-5"
        action=""
      >
        <div>
          <div class="flex flex-col">
            <label for="">Username</label>
            <input v-model="username" type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Fullname</label>
            <input v-model="fullname" type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Email</label>
            <input v-model="email" type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Password</label>
            <input v-model="password" type="text" class="border my-3 p-1" />
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <label for="">Phone number</label>
            <input v-model="phone_number" type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Address</label>
            <input v-model="address" type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">ID Card</label>
            <input v-model="id_card" type="text" class="border my-3 p-1" />
          </div>
          <div class="flex flex-col">
            <label for="">Tags</label>
            <!-- <multiselect-component
              v-model="tag"
              class="my-3"
            ></multiselect-component> -->
            <select v-model="tag" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <!-- <button
          class="bg-slate-700 py-3 text-white rounded-md text-base mt-2"
          @click.prevent="$emit('close-modal')"
        >
          Đóng
        </button> -->
        <button
          @click="addUser()"
          class="bg-blue-primary-login py-3 mt-2 text-white rounded-md text-base"
        >
          Tạo
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import MultiselectComponent from "./MultiselectComponent.vue";
import axios from "axios";
export default {
  // components: { MultiselectComponent },
  data() {
    return {
      value: [],
      options: ["Vip", "Active", "Tpin"],
      imagePreview: null,
      email: "",
      username: "",
      fullname: "",
      password: "",
      phone_number: "",
      address: "",
      id_card: "",
      tag: [],
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
      }
    },
    openImageInput() {
      this.$refs.imageInput.click();
    },
    async addUser() {
      console.log(this.tag);
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        username: this.username,
        fullname: this.fullname,
        password: this.password,
        phone_number: this.phone_number,
        address: this.address,
        id_card: this.id_card,
        tag: this.tag,
      });
      console.warn(result);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  background-color: white;
  height: 680px;
  width: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
.img-demo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.multiselect-wrapper {
  max-height: 33px;
}
</style>
