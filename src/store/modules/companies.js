import axios from "axios";

const state = {
  Companies: [],
};

const getters = {
  allCompanies: (state) => state.Companies,
};

const actions = {
  async fetchCompanies({ commit }) {
    console.log(process.env);
    const response = await axios.get(`${process.env.VUE_APP_API}/companies`);

    commit("setCompanies", response.data);
  },
  async addCompany({ commit }, title) {
    const response = await axios.post(process.env.VUE_APP_API, {
      title,
      completed: false,
    });

    commit("newCompany", response.data);
  },
  async deleteCompany({ commit }, id) {
    await axios.delete(`${process.env.VUE_APP_API}/${id}`);

    commit("removeCompany", id);
  },
};

const mutations = {
  setCompanies: (state, Companies) => (state.Companies = Companies),
  newCompany: (state, Company) => state.Companies.unshift(Company),
  removeCompany: (state, id) =>
    (state.Companies = state.Companies.filter((Company) => Company.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
