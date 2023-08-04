<template>
  <span
    class="item pt-4 hover:border-l-8 border-[#FF9E2C]"
    :class="{
      'border-l-8 border-[#FF9E2C]': $route.path === routePath,
    }"
  >
    <router-link :to="routePath">
      <slot></slot>
    </router-link>
  </span>
</template>

<script>
export default {
  props: {
    routePath: String,
  },
};
</script>
