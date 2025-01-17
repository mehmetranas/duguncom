import axios from "axios";

const state = {
  FormsSchema: [],
  Forms: [],
};

const getters = {
  allSchemas: (state) => state.FormsSchema,
  currentSchemas: (state) => state.FormsSchema[0],
  allForms: (state) => state.Forms,
  lastAddedForm: (state) => state.Forms.slice(-1).pop(),
  getFormOnSchema: (state) => state.FormsSchema.map((f) => f.fieldName),
};

const actions = {
  async fetchSchemas({ commit }, id) {
    const response = await axios.get(
      `${process.env.VUE_APP_API}/companies/${id}/forms`
    );
    commit("setAllSchemas", response.data);
  },

  async addForm({ commit }, form) {
    // Actually we post to serve
    //...

    commit("setAddForm", form);
  },
};

const mutations = {
  setAllSchemas: (state, FormsSchema) => (state.FormsSchema = FormsSchema),
  setAddForm: (state, form) => state.Forms.push(form),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
