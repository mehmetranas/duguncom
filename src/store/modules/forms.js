import axios from "axios";

const state = {
  FormsSchema: [],
  Forms: [],
};

const getters = {
  allSchemas: (state) => state.FormsSchema,
  allForms: (state) => state.Forms,
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
