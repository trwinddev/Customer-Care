<template>
  <div class="flex h-screen" id="admin-page">
    <side-bar></side-bar>
    <header-component></header-component>
    <!-- <main class="flex-grow">
      <list-user></list-user>
    </main> -->
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
// import ListUser from "@/components/ListUser.vue";
export default {
  components: { SideBar, HeaderComponent },
};
</script>

<style></style>
