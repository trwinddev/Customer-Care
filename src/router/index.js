import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import AdminPage from "../pages/AdminPage.vue";
import ContentPage from "../pages/ContentPage.vue";
import MessagePage from "../pages/MessagePage.vue";
import ChartPage from "../pages/ChartPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/admin/manager",
      name: "admin",
      component: AdminPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/content",
      name: "content",
      component: ContentPage,
    },
    {
      path: "/admin/message",
      name: "message",
      component: MessagePage,
    },
    {
      path: "/admin/chart",
      name: "chart",
      component: ChartPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
