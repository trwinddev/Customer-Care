<template>
  <div class="h-screen flex items-center justify-center">
    <form action="" class="right-72 bg-white shadow-2xl py-16 px-14 rounded-xl">
      <h2 class="text-[#F57212] text-xl">Customer care</h2>
      <div class="pt-4">
        <label for="" class="text-blue-primary-login block text-sm pb-2"
          >Tên đăng nhập</label
        >
        <input
          placeholder="example@gmail.com"
          type="text"
          class="py-2 px-3 border border-[#CECDCD] rounded-md mb-3 text-sm"
          v-model="email"
        />
      </div>
      <div>
        <label for="" class="text-blue-primary-login block text-sm pb-2"
          >Mật khẩu</label
        >
        <input
          placeholder="•••••••••••"
          type="password"
          class="py-2 px-3 mb-2 border border-[#CECDCD] rounded-md text-sm"
          v-model="password"
        />
      </div>
      <div class="flex text-center">
        <input type="checkbox" class="mr-2" />
        <span class="text-blue-primary-login text-sm">Ghi nhớ ?</span>
      </div>
      <button
        class="mt-4 rounded-lg bg-blue-primary-login text-[#FFFCFC] w-full border-none outline-none text-sm py-2"
        @click="login"
      >
        Đăng nhập
      </button>
      <p v-if="message" class="text-red-500">{{ message }}</p>
    </form>
    <!-- <img src="../assets/images/image-login.png" alt="" class="absolute" /> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const message = ref("");
    const router = useRouter();
    const store = useStore();

    const login = () => {
      if (email.value === "admin@mail.com" && password.value === "123") {
        message.value = "";
        store
          .dispatch("login", {
            username: email.value,
            password: password.value,
          })
          .then(() => {
            router.push("/admin");
          });
      } else {
        message.value = "Tài khoản hoặc mật khẩu không chính xác!";
      }
    };

    return {
      email,
      password,
      message,
      login,
    };
  },
};
</script>

<style>
.container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
