<template>
  <div class="bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="relative sm:max-w-xl sm:mx-auto w-full">
      <form @submit="onSubmit">
        <div class="bg-white md:mx-0 pb-10 pt-2 px-6 md:px-0 relative shadow">
          <div class="flex items-center -mx-6 md:mx-0 border-b space-x-5">
            <div
              class="block pl-2 font-semibold text-xl self-start text-gray-700"
            >
              <h2 class="leading-relaxed text-base ml-4 font-bold my-1">
                Ücretsiz fiyat teklifi al
              </h2>
            </div>
          </div>
          <div class="max-w-md mx-auto">
            <div class="divide-y divide-gray-200">
              <div
                v-if="getFormOnSchema.length > 0"
                class="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <GenericForm :fields="allSchemas" :data="formData" />
              </div>
            </div>
          </div>
          <div
            class="pt-4 flex items-center space-x-4 justify-center mx-auto max-w-md"
          >
            <div class="items-center w-full">
              <Button buttonText="Ucretsiz Teklif Al" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GenericForm from "../components/generic-form";
import Button from "../components/form-controls/button";
export default {
  name: "Form",
  components: { GenericForm, Button },
  data() {
    return {
      companyId: this.$route.params.id,
      formData: { values: {}, errors: {} },
    };
  },
  methods: {
    ...mapActions(["fetchSchemas", "addForm"]),
    onSubmit(event) {
      event.preventDefault();
      this.addForm(this.formData.values);
      this.$router.push({ name: "SuccessMessage" });
    },
  },
  computed: mapGetters(["allSchemas", "getFormOnSchema"]),
  created() {
    this.fetchSchemas(this.companyId);
  },
};
</script>

<style scoped></style>
