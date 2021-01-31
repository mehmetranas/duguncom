<template>
  <select
    id="country"
    name="country"
    required
    v-model="data[field.fieldName]"
    autocomplete="country"
    class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  >
    <option
      v-for="(item, i) in field.infoRequestFormOptions"
      :key="item.id"
      :value="item.optionText"
      :disabled="i == 0"
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
    },
  },
};
</script>

<style scoped></style>
