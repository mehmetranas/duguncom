<template>
  <textarea
    type="text"
    v-model="data.value"
    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
  ></textarea>
</template>

<script>
export default {
  name: "app-textarea",
  props: {
    field: { required: true },
    data: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
