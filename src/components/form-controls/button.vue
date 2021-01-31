<template>
  <button
    class="bg-pink-600 hover:bg-pink-800 hover:border-pink-800 text-white py-2 px-4 rounded w-full border border-pink-600 text-xs font-bold py-3"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["buttonText"]
};
</script>
