<template>
  <div>
    <Multiselect
      v-model="tag"
      mode="tags"
      placeholder="Select tags"
      :options="options"
      :search="true"
      class="custom-multiselect"
    />
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      tag: [],
      options: ["Vip", "Active", "Tpin"],
    };
  },
  watch: {
    tag(newValue) {
      console.log("Tag in MultiselectComponent:", newValue); // Add this log to see the value of "tag"
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.custom-multiselect {
  height: 10px;
}
</style>
