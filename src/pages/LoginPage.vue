<template>
  <div class="h-screen flex items-center justify-center">
    <div class="form-center flex relative items-center">
      <form
        @submit="onSubmit"
        class="lg:absolute lg:right-80 bg-white shadow-2xl py-16 px-14 rounded-xl"
      >
        <h2 class="text-[#F57212] text-xl">Customer care</h2>
        <div class="pt-4">
          <label for="" class="text-blue-primary-login block text-sm pb-2"
            >Tên đăng nhập</label
          >
          <input
            placeholder="example@gmail.com"
            type="text"
            class="py-2 px-3 border border-[#CECDCD] rounded-md mb-3 text-sm"
            v-bind="email"
          />
          <div class="text-red-600 text-sm -mt-2 pb-2">{{ errors.email }}</div>
        </div>
        <div>
          <label for="" class="text-blue-primary-login block text-sm pb-2"
            >Mật khẩu</label
          >
          <input
            placeholder="•••••••••••"
            type="password"
            class="py-2 px-3 mb-2 border border-[#CECDCD] rounded-md text-sm"
            v-bind="password"
          />
          <div class="text-red-600 text-sm -mt-1 pb-2">
            {{ errors.password }}
          </div>
        </div>
        <div class="flex text-center">
          <input
            type="checkbox"
            id="rememberPass"
            class="mr-2"
            v-model="rememberMe"
          />
          <label for="rememberPass" class="text-blue-primary-login text-sm"
            >Ghi nhớ ?</label
          >
        </div>
        <button
          class="mt-4 rounded-lg bg-blue-primary-login text-[#FFFCFC] w-full border-none outline-none text-sm py-2"
          @click="login"
        >
          Đăng nhập
        </button>
        <p v-if="loginError" class="text-red-500 text-sm mt-2">
          {{ loginError }}
        </p>
      </form>
      <img
        src="../assets/image-login.png"
        alt="image-login"
        class="hidden lg:block h-[390px] object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { auth } from "../config/firebase";
import { useRouter } from "vue-router";
import md5 from "md5";
import { ref, onMounted } from "vue";

const rememberMe = ref(false);
const autoFillLoginForm = () => {
  const storedToken = sessionStorage.getItem("token");
  if (storedToken) {
    email.value = localStorage.getItem("email") || "";
    password.value = localStorage.getItem("password") || "";
    rememberMe.value = localStorage.getItem("rememberMe") === "true";
  }
};

onMounted(() => {
  autoFillLoginForm();
});

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is a required field"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is a required field"),
  }),
});

const router = useRouter();
let loginError = "";

const login = (token, rememberMe = false) => {
  if (rememberMe) {
    sessionStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
};

const onSubmit = handleSubmit(async (values) => {
  try {
    const { email, password } = values;
    const authorizationToken = md5(email + password);
    console.log(authorizationToken);
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    console.log("Login successful:", user);

    if (rememberMe.value) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.setItem("rememberMe", "false");
    }

    localStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("token", authorizationToken);
    router.push("/admin/manager");
    loginError = "";
  } catch (error) {
    console.error("Login failed:", error.message);
    loginError =
      "Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản và mật khẩu.";
  }
});

const email = defineInputBinds("email");
const password = defineInputBinds("password");
</script>
