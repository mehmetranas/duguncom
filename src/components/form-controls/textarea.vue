<template>
  <textarea
    type="text"
    v-model="data.value"
    class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  ></textarea>
</template>

<script>
export default {
  name: "app-textarea",
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
