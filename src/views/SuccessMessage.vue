<template>
  <div class="bg-gray-100 flex flex-col justify-center sm:py-12 h-screen">
    <div class="relative sm:max-w-xl sm:mx-auto w-full h-full">
      <div
        class="bg-white md:mx-0 pb-10 pt-2 px-6 md:px-0 relative shadow h-full"
      >
        <div class="flex items-center -mx-6 md:mx-0 border-b space-x-5">
          <div
            class="block pl-2 font-semibold text-xl self-start text-gray-700"
          >
            <h2 class="leading-relaxed text-base ml-4 font-bold my-1">
              Ücretsiz fiyat teklifi al
            </h2>
          </div>
        </div>
        <div class="max-w-md mx-0 md:mx-10 py-2">
          <div
            class="text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
          >
            <div class="flex pl-2 text-xl self-start text-gray-700">
              <img :src="checkImage" />
              <h2
                class="leading-relaxed font-semibold text-base ml-2 my-1"
                style="color:#00abaa"
              >
                Fiyat teklifin başarıyla iletildi!
              </h2>
            </div>
            <div class="flex pl-8 text-xl self-start text-gray-700">
              <p class="text-gray-600 text-sm">
                Ilgili firma sana en kısa sürede dönüş yapacak.
              </p>
            </div>
          </div>
          <div
            class="space-y-2 leading-6 sm:leading-7 sm:text-lg text-base text-gray-700"
          >
            <p
              v-for="(value, key, i) in lastAddedForm"
              :key="i"
              class="text-left text-base my-0 border-b-2"
            >
              <span class="font-bold">{{ getPropertyNameByKey(key) }}:</span>
              <span class="ml-2">{{ value }}</span>
            </p>
          </div>
        </div>
        <div
          class="pt-4 flex items-center space-x-4 justify-center mx-auto max-w-md"
        >
          <div class="items-center w-full">
            <router-link :to="{ name: 'Home' }"
              ><Button buttonText="Tamam"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkImage from "../assets/images/check.svg";
import { mapGetters } from "vuex";
import Button from "../components/form-controls/button";
export default {
  name: "Success",
  components: {
    Button,
  },
  computed: {
    ...mapGetters(["lastAddedForm", "allSchemas"]),
  },
  methods: {
    getPropertyNameByKey(key) {
      const field = this.allSchemas.find((s) => s.fieldName == key);
      return (field && field.fieldLabel) || "";
    },
  },
  data() {
    return {
      checkImage,
    };
  },
};
</script>

<style scoped></style>
