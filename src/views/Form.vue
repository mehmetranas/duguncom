<template>
  <div
    class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <form @submit="onSubmit">
        <div class="bg-white md:mx-0 px-4 py-10 relative shadow sm:p-10">
          <div class="max-w-md mx-auto">
            <div class="flex items-center space-x-5">
              <div
                class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono"
              >
                i
              </div>
              <div
                class="block pl-2 font-semibold text-xl self-start text-gray-700"
              >
                <h2 class="leading-relaxed">Create an Event</h2>
                <p class="text-sm text-gray-500 font-normal leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="divide-y divide-gray-200">
              <div
                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <GenericForm :fields="allSchemas" :data="formData" />
              </div>
            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
            <button class="flex items-center mt-auto pt-4 space-x-4 w-full">
              <svg
                class="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              Cancel
            </button>
            <button
              type="submit"
              class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GenericForm from "../components/generic-form";
export default {
  name: "Form",
  components: { GenericForm },
  data() {
    return {
      companyId: this.$route.params.id,
      formData: {
        ad_soyad_58: { value: "" },
        e_mail_60: { value: "" },
        telefon_61: { value: "" },
        dugun_tarihi_1: { value: "" },
        kisi_basi_butceniz_2: { value: "" },
        tahmini_davetli_sayisi_4: { value: "" },
        mesajiniz_5: { value: "" },
      },
    };
  },
  methods: {
    ...mapActions(["fetchSchemas", "addForm"]),
    onSubmit(event) {
      event.preventDefault();
      let formBody = {};
      for (const [key, el] of Object.entries(this.formData)) {
        formBody[key] = el.value;
      }
      this.addForm(formBody);
    },
  },
  computed: mapGetters(["allSchemas"]),
  created() {
    this.fetchSchemas(this.companyId);
  },
};
</script>

<style scoped></style>
