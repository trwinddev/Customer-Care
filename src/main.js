import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
// import("preline");
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const app = createApp(App);

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (to.path === "/" && isLoggedIn === "true") {
    next({ path: "/admin/manager", replace: true });
  } else if (to.path === "/admin/manager" && isLoggedIn !== "true") {
    next("/");
  } else {
    next();
  }
});

app.component("v-select", vSelect);
app.use(router);

app.mount("#app");
