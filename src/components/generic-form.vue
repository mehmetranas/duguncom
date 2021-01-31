<template>
  <div class="gap-1 flex flex-col">
    <div v-for="field in fields" :key="field.id" class="flex flex-col my-1">
      <label class="leading-loose text-left text-sm">{{
        field.fieldLabel
      }}</label>
      <component
        :is="`app-${field.fieldType}`"
        :field="field"
        :data.sync="data.values"
        :errors="data.errors"
      ></component>
    </div>
  </div>
</template>

<script>
import appText from "./form-controls/input";
import appSelect from "./form-controls/select";
import appTextarea from "./form-controls/textarea";
export default {
  name: "GenericForm",
  components: {
    appText,
    appSelect,
    appTextarea,
  },
  props: {
    fields: { required: true },
    data: { required: true },
  },
};
</script>

<style scoped></style>
