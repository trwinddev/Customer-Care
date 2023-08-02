import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store/store";
import("preline");
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const app = createApp(App);

app.component("v-select", vSelect);
app.use(router);
app.use(store);

app.mount("#app");
