<template>
  <button
    class="text-pink-600 border-pink-600 hover:bg-pink-600 active:border-pink-600 hover:text-white border py-2 px-4 rounded w-full text-xs font-bold py-3"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ButtonLight",
  props: ["buttonText"],
};
</script>

<style scoped></style>
