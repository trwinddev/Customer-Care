import { createStore } from "vuex";
import { generateAuthToken } from "../auth/index";

const store = createStore({
  state() {
    return {
      authToken: null,
    };
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      const authToken = generateAuthToken(email, password);
      commit("setAuthToken", authToken);
    },
  },
});

export default store;
