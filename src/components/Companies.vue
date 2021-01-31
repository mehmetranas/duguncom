<template>
  <div class="grid grid-cols-12 gap-4">
    <div
      v-for="company in allCompanies"
      :key="company.id"
      class="col-span-12 md:col-span-6 lg:col-span-3 px-2 md:px-0"
    >
      <Company :company="company" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Company from "./Company";
export default {
  name: "Companies",
  components: {
    Company,
  },
  methods: {
    ...mapActions(["fetchCompanies"]),
  },
  computed: mapGetters(["allCompanies"]),
  created() {
    this.fetchCompanies();
  },
};
</script>

<style scoped>
</style>