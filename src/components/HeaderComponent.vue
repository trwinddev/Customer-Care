<template>
  <div class="w-full lg:w-fit">
    <div
      class="border-b-2 border-b-orange-primary-color flex justify-center lg:justify-start"
    >
      <div
        class="cursor-pointer"
        @click="toggleView('info')"
        :class="{
          'text-orange-primary-color': !search,
          'text-gray-text-gray': search,
        }"
      >
        <div class="text-sm font-bold w-full h-full py-4 px-3">
          Thông tin khách hàng
        </div>
      </div>
      <div
        class="cursor-pointer"
        @click="toggleView('search')"
        :class="{
          'text-orange-primary-color': search,
          'text-gray-text-gray': !search,
        }"
      >
        <div class="text-sm font-bold w-full h-full py-4 px-3">Tìm kiếm</div>
      </div>
    </div>
    <div>
      <header-icon
        @selected-svg="updateSelectedSVG"
        v-if="!search"
      ></header-icon>
      <search-component v-else></search-component>
    </div>
    <user-detail></user-detail>
    <div class="lg:hidden">
      <infor-component v-if="!search && showListUser"></infor-component>
    </div>
  </div>
  <div>
    <div class="hidden lg:block">
      <user-detail v-if="search"></user-detail>
    </div>
    <div class="hidden lg:block">
      <list-user v-if="!search && showListUser"></list-user>
    </div>
  </div>
</template>

<script>
import HeaderIcon from "./HeaderIcon.vue";
import InforComponent from "./InforComponent.vue";
import ListUser from "./ListUser.vue";
import SearchComponent from "./SearchComponent.vue";
import UserDetail from "./UserDetail.vue";

export default {
  components: {
    HeaderIcon,
    SearchComponent,
    UserDetail,
    ListUser,
    InforComponent,
  },
  data() {
    return {
      search: false,
      selectedSVG: 1,
      showListUser: true,
    };
  },
  methods: {
    toggleView(view) {
      this.search = view === "search";
    },
    updateSelectedSVG(index) {
      this.selectedSVG = index;
      this.showListUser = index === 1;
    },
  },
};
</script>

<style></style>
