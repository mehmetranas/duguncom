<template>
  <div class="bg-white shadow-xl rounded-lg overflow-hidden">
    <div
      class="bg-cover bg-center h-56 p-4"
      v-bind:style="{ backgroundImage: 'url(' + company.imageUrl + ')' }"
    ></div>
    <div class="p-2">
      <p class="capitalize tracking-wide text-xs text-gray-400 text-left">
        {{
          `${company.listingDataBrief[1].label} ${company.listingDataBrief[1].value}`
        }}
        &#183;
        {{
          `${company.listingDataBrief[0].label} ${company.listingDataBrief[0].value}`
        }}
      </p>
      <p class="text-2xl text-left font-bold text-gray-900 capitalize mb-1">
        {{ company.name }}
      </p>
      <div class="flex items-baseline">
        <div><a-rate v-model="value" /></div>
        <div class="flex items-center">
          <span class="mx-2 text-gray-400">{{ company.commentCount }}</span>
          <img :src="MedalSvg" />
          <span class="ml-1">inceleme</span>
        </div>
      </div>
    </div>
    <div class="flex p-4 border-t border-gray-300 text-gray-700 gap-2">
      <div class="flex-1 items-center">
        <ButtonLight buttonText="Incele" />
      </div>
      <div class="flex-1 items-center">
        <router-link to="/form"
          ><Button buttonText="Ucretsiz Teklif Al"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MedalSvg from "../assets/images/medal.svg";
import Button from "./form-controls/button";
import ButtonLight from "./form-controls/button-light";
export default {
  name: "Company",
  data() {
    return {
      value: this.company.score,
      MedalSvg,
    };
  },
  props: ["company"],
  methods: {},
  components: {
    Button,
    ButtonLight,
  },
  created() {
    console.log("company", this.company);
  },
};
</script>

<style>
.ant-rate-star {
  color: #00abaa !important;
}
</style>