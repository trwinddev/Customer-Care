<template>
  <div>
    <div class="border-b-2 border-b-orange-primary-color flex">
      <div class="">
        <div
          class="text-orange-primary-color text-sm font-bold bg-gradient-to-b from-orange-rgba-one to-orange-rgba-two w-full h-full py-4 px-3"
        >
          Thông tin khách hàng
        </div>
      </div>
      <div class="">
        <div
          class="text-sm font-bold w-full h-full py-4 px-3 text-gray-text-gray"
        >
          Tìm kiếm
        </div>
      </div>
    </div>
    <div>
      <header-icon></header-icon>
    </div>
    <div>
      <infor-component></infor-component>
    </div>
    <div>
      <header-contact></header-contact>
    </div>
  </div>
</template>

<script>
import HeaderContact from "./HeaderContact.vue";
import HeaderIcon from "./HeaderIcon.vue";
import InforComponent from "./InforComponent.vue";
export default {
  components: { HeaderIcon, InforComponent, HeaderContact },
};
</script>

<style></style>
