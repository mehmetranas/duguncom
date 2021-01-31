<template>
  <select
    id="country"
    name="country"
    v-model="data.value"
    autocomplete="country"
    class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  >
    <option
      v-for="item in field.infoRequestFormOptions"
      :key="item.id"
      :value="item.id"
      >{{ item.optionText }}</option
    >
  </select>
</template>

<script>
export default {
  name: "app-select",
  props: {
    field: { required: true },
    data: {
      required: true,
      default: () => ({ value: "1" }),
    },
  },
};
</script>

<style scoped></style>
