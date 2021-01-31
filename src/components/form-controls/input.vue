<template>
  <div class="relative focus-within:text-gray-600 text-gray-400">
    <input
      type="text"
      v-model="data.value"
      class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <div class="absolute right-3 top-2">
      <img :src="require(`/src/assets/images/form-${field.fieldName}.svg`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app-text",
  props: {
    field: { required: true },
    data: {
      required: true,
      default: () => ({ value: "" }),
    },
  },
};
</script>

<style scoped></style>
