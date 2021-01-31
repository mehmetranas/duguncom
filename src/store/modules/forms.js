import axios from "axios";

const state = {
  FormsSchema: [],
};

const getters = {
  allSchemas: (state) => state.FormsSchema,
};

const actions = {
  async fetchSchemas({ commit }, id) {
    const response = await axios.get(
      `${process.env.VUE_APP_API}/companies/${id}/forms`
    );

    commit("setAllSchemas", response.data);
  },
};

const mutations = {
  setAllSchemas: (state, FormsSchema) => (state.FormsSchema = FormsSchema),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
