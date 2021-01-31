<template>
  <div>
    <div v-for="field in fields" :key="field.id" class="flex flex-col">
      <label class="leading-loose">{{ field.fieldLabel }}</label>
      <component
        :is="`app-${field.fieldType}`"
        :field="field"
        :data.sync="data[field.fieldName]"
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
