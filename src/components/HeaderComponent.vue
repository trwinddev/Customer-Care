<template>
  <div class="w-[400px]">
    <div class="border-b-2 border-b-orange-primary-color flex">
      <div
        class="cursor-pointer"
        @click="toggleView('info')"
        :class="{
          'text-orange-primary-color': !search,
          'text-gray-text-gray': search,
        }"
      >
        <!-- bg-gradient-to-b from-orange-rgba-one to-orange-rgba-two -->
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
    <!-- <div>
      <infor-component v-if="!search"></infor-component>
    </div>
    <div>
      <header-contact v-if="!search"></header-contact>
    </div> -->
  </div>
  <div>
    <user-detail v-if="search"></user-detail>
    <list-user v-if="!search && showListUser"></list-user>
  </div>
</template>

<script>
import HeaderIcon from "./HeaderIcon.vue";
import ListUser from "./ListUser.vue";
import SearchComponent from "./SearchComponent.vue";
import UserDetail from "./UserDetail.vue";

export default {
  components: {
    HeaderIcon,
    SearchComponent,
    UserDetail,
    ListUser,
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
