<template>
  <div class="modal-overlay" v-if="user" @click="handleClickOutside">
    <div class="modal-content w-auto" @click.stop>
      <button class="close-button" @click="closeUserDetail">&times;</button>
      <div class="pt-10">
        <div class="infor-top flex items-center">
          <div class="avatar ml-1 mr-3">
            <img
              :src="getImageFromBase64(user.avatar)"
              class="w-16 h-16 object-cover rounded-full"
              alt="avatar"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="font-bold text-base">{{ user.fullname }}</div>
            <div class="uppercase text-white text-xs font-medium flex gap-3">
              <span
                class="bg-orange-primary-color px-2 py-[2px] rounded-xl"
                v-for="tag in user.tag"
                :key="tag"
                >{{ tag.tagName }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 flex flex-col gap-5 font-medium" v-if="user">
        <div class="flex items-center gap-5">
          <div class="icon">
            <svg
              width="25"
              height="31"
              viewBox="0 0 38 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5833 0C33.1 0 34.5547 0.607828 35.6272 1.68977C36.6997 2.77171 37.3022 4.23914 37.3022 5.76923V24.2308C37.3022 25.7609 36.6997 27.2283 35.6272 28.3102C34.5547 29.3922 33.1 30 31.5833 30H6.42008C4.90333 30 3.44871 29.3922 2.3762 28.3102C1.3037 27.2283 0.701172 25.7609 0.701172 24.2308V5.76923C0.701172 4.23914 1.3037 2.77171 2.3762 1.68977C3.44871 0.607828 4.90333 0 6.42008 0H31.5833ZM35.0146 9.14077L19.5827 18.3023C19.4368 18.3887 19.2738 18.4414 19.1052 18.4566C18.9367 18.4717 18.767 18.449 18.6082 18.39L18.4206 18.3023L2.98874 9.14538V24.2308C2.98874 25.1488 3.35025 26.0293 3.99376 26.6784C4.63726 27.3276 5.51003 27.6923 6.42008 27.6923H31.5833C32.4933 27.6923 33.3661 27.3276 34.0096 26.6784C34.6531 26.0293 35.0146 25.1488 35.0146 24.2308V9.14077ZM31.5833 2.30769H6.42008C5.51003 2.30769 4.63726 2.67239 3.99376 3.32155C3.35025 3.97072 2.98874 4.85117 2.98874 5.76923V6.46615L19.0017 15.9692L35.0146 6.46154V5.76923C35.0146 4.85117 34.6531 3.97072 34.0096 3.32155C33.3661 2.67239 32.4933 2.30769 31.5833 2.30769Z"
                fill="black"
              />
            </svg>
          </div>
          <span>{{ user.email }}</span>
        </div>
        <div class="flex items-center gap-5">
          <div class="icon">
            <svg
              width="25"
              height="31"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.953 22.2449C20.0008 22.2449 21.5114 20.7358 21.5114 18.6898C21.5114 16.6438 20.0008 15.1346 17.953 15.1346C15.9051 15.1346 14.3945 16.6438 14.3945 18.6898C14.3945 20.7358 15.9033 22.2449 17.953 22.2449Z"
                fill="black"
              />
              <path
                d="M36.2525 8.02441H7.785C5.82252 8.02441 4.22656 9.51935 4.22656 11.3574V33.1326C4.22656 34.9707 5.82252 36.4656 7.785 36.4656H36.2525C38.2149 36.4656 39.8109 34.9707 39.8109 33.1326V11.3574C39.8109 9.51935 38.2149 8.02441 36.2525 8.02441ZM36.2525 32.9104L7.785 32.8909V11.5796L36.2525 11.5991V32.9104Z"
                fill="black"
              />
              <path
                d="M36.2525 8.02441H7.785C5.82252 8.02441 4.22656 9.51935 4.22656 11.3574V33.1326C4.22656 34.9707 5.82252 36.4656 7.785 36.4656H36.2525C38.2149 36.4656 39.8109 34.9707 39.8109 33.1326V11.3574C39.8109 9.51935 38.2149 8.02441 36.2525 8.02441ZM36.2525 32.9104L7.785 32.8909V11.5796L36.2525 11.5991V32.9104Z"
                stroke="black"
              />
              <path
                d="M25.577 16.9122H32.6939V20.4674H25.577V16.9122ZM27.3562 24.0225H32.6939V27.5777H27.3562V24.0225ZM24.5628 28.5305C24.5628 26.0881 21.5809 23.5781 17.9531 23.5781C14.3252 23.5781 11.3433 26.0881 11.3433 28.5305V29.3552H24.5628V28.5305Z"
                fill="black"
              />
            </svg>
          </div>
          <span>{{ user.id_card }}</span>
        </div>
        <div class="flex items-center gap-5">
          <div class="icon">
            <svg
              width="25"
              height="31"
              viewBox="0 0 36 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6827 22.8246L25.1024 20.4446C25.4263 20.126 25.8382 19.9078 26.2869 19.8172C26.7357 19.7265 27.2016 19.7673 27.627 19.9346L30.5739 21.0949C31.0082 21.2658 31.3805 21.5608 31.6428 21.9419C31.905 22.3229 32.0452 22.7725 32.0451 23.2326V28.5037C32.0459 28.817 31.9816 29.1271 31.8563 29.4152C31.731 29.7032 31.5472 29.963 31.3162 30.1787C31.0853 30.3945 30.812 30.5616 30.5131 30.6698C30.2142 30.7781 29.8959 30.8252 29.5779 30.8083C8.92154 29.5439 4.74966 12.3356 3.97513 5.74601C3.93762 5.42385 3.96987 5.09754 4.06977 4.78852C4.16968 4.47951 4.33496 4.1948 4.55476 3.95312C4.77455 3.71144 5.04388 3.51827 5.34502 3.38631C5.64616 3.25436 5.97229 3.1866 6.30196 3.18751H11.566C12.0338 3.18749 12.4909 3.32535 12.8783 3.58329C13.2657 3.84123 13.5656 4.20742 13.7394 4.63463L14.918 7.53313C15.088 7.95152 15.1296 8.40979 15.0374 8.85117C14.9452 9.29254 14.7234 9.69762 14.3994 10.0162L11.9797 12.3962C11.9797 12.3962 13.3214 21.6739 22.6827 22.8246Z"
                fill="black"
              />
              <path
                d="M22.3231 4.25V6.375H27.2771L20.1626 13.3726L21.6901 14.875L28.8045 7.87738V12.75H30.965V4.25H22.3231Z"
                fill="black"
              />
            </svg>
          </div>
          <span>{{ user.phone_number }}</span>
        </div>
        <div class="flex items-center gap-5">
          <div class="icon">
            <svg
              width="25"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.4353 9.6875C30.8847 9.6875 31.2523 9.36055 31.2523 8.96094V6.53906C31.2523 6.13945 30.8847 5.8125 30.4353 5.8125H29.0737V2.90625C29.0737 1.30176 27.6099 0 25.8057 0H4.01941C2.21523 0 0.751465 1.30176 0.751465 2.90625V28.0938C0.751465 29.6982 2.21523 31 4.01941 31H25.8057C27.6099 31 29.0737 29.6982 29.0737 28.0938V25.1875H30.4353C30.8847 25.1875 31.2523 24.8605 31.2523 24.4609V22.0391C31.2523 21.6395 30.8847 21.3125 30.4353 21.3125H29.0737V17.4375H30.4353C30.8847 17.4375 31.2523 17.1105 31.2523 16.7109V14.2891C31.2523 13.8895 30.8847 13.5625 30.4353 13.5625H29.0737V9.6875H30.4353ZM25.8057 28.0938H4.01941V2.90625H25.8057V28.0938ZM14.9126 15.5C17.3159 15.5 19.2698 13.7623 19.2698 11.625C19.2698 9.4877 17.3159 7.75 14.9126 7.75C12.5093 7.75 10.5553 9.4877 10.5553 11.625C10.5553 13.7623 12.5093 15.5 14.9126 15.5ZM8.81241 23.25H21.0128C21.857 23.25 22.5378 22.7293 22.5378 22.0875V20.925C22.5378 18.9996 20.4885 17.4375 17.9627 17.4375C17.2274 17.4375 16.6895 17.9219 14.9126 17.9219C13.0812 17.9219 12.6386 17.4375 11.8625 17.4375C9.33664 17.4375 7.28736 18.9996 7.28736 20.925V22.0875C7.28736 22.7293 7.96819 23.25 8.81241 23.25Z"
                fill="black"
              />
            </svg>
          </div>
          <span>{{ user.address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUsers } from "../utils/getApi";

export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showModal: false,
      users: [],
      imageSrc: "",
    };
  },
  async mounted() {
    this.users = await fetchUsers();
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    closeUserDetail() {
      this.$emit("close-user-detail");
    },
    handleClickOutside(event) {
      if (event.target.classList.contains("modal-overlay")) {
        this.closeUserDetail();
      }
    },
    getImageFromBase64(base64Image) {
      const image = new Image();
      image.src = base64Image;
      return base64Image;
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 80%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 99999;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #777;
  background: transparent;
  border: none;
}
</style>
