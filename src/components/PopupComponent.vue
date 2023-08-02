<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div
      class="modal h-5/6 w-[300px] md:w-[480px] lg:w-[550px] custom-scrollbar p-4"
      @click.stop
    >
      <div class="flex justify-between border-b-2 p-5 items-center">
        <h2 class="text-blue-primary-login font-medium">Thông tin cá nhân</h2>
        <div
          class="close font-semibold cursor-pointer hover:text-gray-text-gray"
          @click="$emit('close-modal')"
        >
          ｘ
        </div>
      </div>
      <div class="avatar flex justify-center content-center items-center mt-2">
        <div
          class="w-40 h-40 bg-gray-300 rounded-full relative cursor-pointer"
          @click="openImageInput"
        >
          <img
            src="https://www.shareicon.net/data/64x64/2015/09/25/646131_image_512x512.png"
            alt=""
            class="img-icon"
            v-if="!imagePreview"
          />
          <img
            v-if="imagePreview"
            :src="imagePreview"
            alt="Preview"
            class="img-demo w-40 h-40 object-cover rounded-full"
          />
          <div
            class="bg-gray-200 p-[6px] inline-block rounded-full absolute bottom-4 right-1"
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
      <Form
        @submit="handleSubmit()"
        class="p-5 grid lg:grid-cols-2 lg:gap-5"
        action=""
      >
        <div>
          <div class="flex flex-col">
            <label for="username">Username</label>
            <Field
              type="text"
              name="username"
              v-model="username"
              class="border my-3 p-1"
              :rules="requiredRule('Username')"
            />
            <ErrorMessage
              class="text-red-500 text-sm -mt-2 mb-2"
              name="username"
            />
          </div>
          <div class="flex flex-col">
            <label for="fullname">Fullname</label>
            <Field
              type="text"
              name="fullname"
              v-model="fullname"
              class="border my-3 p-1"
              :rules="requiredRule('Fullname')"
            />
            <ErrorMessage
              class="text-red-500 text-sm -mt-2 mb-2"
              name="fullname"
            />
          </div>
          <div class="flex flex-col">
            <label for="email">Email</label>
            <Field
              type="email"
              name="email"
              v-model="email"
              class="border my-3 p-1"
              :rules="validateEmail"
            />
            <ErrorMessage
              class="text-red-500 text-sm -mt-2 mb-2"
              name="email"
            />
          </div>
          <div class="flex flex-col">
            <label for="password">Password</label>
            <Field
              type="password"
              name="password"
              v-model="password"
              class="border my-3 p-1"
              :rules="requiredRule('Password')"
            />
            <ErrorMessage
              class="text-red-500 text-sm -mt-2 mb-2"
              name="password"
            />
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <label for="phone_number">Phone number</label>
            <Field
              type="text"
              name="phone_number"
              v-model="phone_number"
              class="border my-3 p-1"
              :rules="requiredRule('Phone number')"
            />
            <ErrorMessage
              class="text-red-500 text-sm -mt-2 mb-2"
              name="phone_number"
            />
          </div>
          <div class="flex flex-col">
            <label for="address">Address</label>
            <Field
              type="text"
              name="address"
              v-model="address"
              class="border my-3 p-1"
              :rules="requiredRule('Address')"
            />
            <ErrorMessage
              class="text-red-500 text-sm -mt-2 mb-2"
              name="address"
            />
          </div>
          <div class="flex flex-col">
            <label for="id_card">ID Card</label>
            <Field
              type="text"
              name="id_card"
              v-model="id_card"
              class="border my-3 p-1"
              :rules="requiredRule('ID Card')"
            />
            <ErrorMessage
              class="text-red-500 text-sm -mt-2 mb-2"
              name="id_card"
            />
          </div>
          <div class="flex flex-col">
            <label for="tag">Tags</label>
            <!-- <multiselect-component
              v-model="tag"
              class="my-3"
            ></multiselect-component> -->
            <select v-model="tag" name="tag" id="tag">
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
          @click="addUser"
          type="submit"
          class="py-3 mt-2 text-white rounded-md text-base"
          :class="{
            'bg-blue-300': !isFormValid,
            'bg-blue-primary-login': isFormValid,
            'cursor-not-allowed': !isFormValid,
          }"
          :disabled="!isFormValid"
        >
          Tạo
        </button>
      </Form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Form, Field, ErrorMessage } from "vee-validate";
// import imageToBase64 from "image-to-base64/browser";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
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
  computed: {
    isFormValid() {
      return (
        this.email &&
        this.username &&
        this.fullname &&
        this.password &&
        this.phone_number &&
        this.address &&
        this.id_card
      );
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
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
      let imageData = null;
      if (this.imagePreview) {
        try {
          const response = await fetch(this.imagePreview);
          const blob = await response.blob();
          imageData = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
        } catch (error) {
          console.error("Error converting image to base64:", error);
          return;
        }
      }

      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        username: this.username,
        fullname: this.fullname,
        password: this.password,
        phone_number: this.phone_number,
        address: this.address,
        id_card: this.id_card,
        tag: this.tag,
        avatar: imageData,
      });
      console.warn(result);
      this.closeModal();
    },
    handleSubmit() {},
    requiredRule(fieldName) {
      return (value) => {
        if (!value) {
          return `${fieldName} is required`;
        }
        return true;
      };
    },
    validateEmail(value) {
      if (!value) {
        return "Email is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
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
  border-radius: 20px;
  overflow-y: auto;
}
.img-demo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0); /* Make it transparent */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.2); /* Show some color on hover if needed */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0); /* Make it transparent */
}
.multiselect-wrapper {
  max-height: 33px;
}
</style>
