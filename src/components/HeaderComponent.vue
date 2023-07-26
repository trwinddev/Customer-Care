<template>
  <div class="w-[300px]">
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
      <header-icon v-if="!search"></header-icon>
      <search-component v-else></search-component>
    </div>
    <div>
      <infor-component v-if="!search"></infor-component>
    </div>
    <div>
      <header-contact v-if="!search"></header-contact>
    </div>
  </div>
</template>

<script>
import HeaderContact from "./HeaderContact.vue";
import HeaderIcon from "./HeaderIcon.vue";
import InforComponent from "./InforComponent.vue";
import SearchComponent from "./SearchComponent.vue";

export default {
  components: { HeaderIcon, InforComponent, HeaderContact, SearchComponent },
  data() {
    return {
      search: false,
    };
  },
  methods: {
    toggleView(view) {
      this.search = view === "search";
    },
  },
};
</script>

<style></style>
