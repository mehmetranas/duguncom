<template>
  <p class="my-0 text-left text-red-600 text-sm">{{ message }}</p>
</template>

<script>
export default {
  props: {
    message: { required: true },
  },
};
</script>

<style scoped></style>
