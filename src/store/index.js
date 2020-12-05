import Vue from "vue";
import Vuex from "vuex";
import signIn from "@/services/auth.service.js";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      mail: null,
      password: null
    },
    error: null
  },
  getters: {
    userData: state => state.userData,
    userEmail: state => state.userData.mail,
    userPassword: state => state.userData.password,
    loginAlert: state => state.error
  },
  mutations: {
    verifyEmail(state, payload) {
      state.userData.mail = payload;
    },
    verifyPass(state, payload) {
      state.userData.password = payload;
    },
    loginAlert(state, payload) {
      state.error = payload;
    },
    getSignInData(state, payload) {
      state.credentials = payload;
    }
  },
  actions: {
    verifyEmail({ commit }, payload) {
      commit("verifyEmail", payload);
    },
    verifyPass({ commit }, payload) {
      commit("verifyPass", payload);
    },
    verifyLogin: async ({ commit }, payload) => {
      try {
        const auth = await signIn.signin(payload);
        commit("getSignInData", auth.data);
        commit("loginAlert", null);
        Cookies.set("auth-token", auth.data.token, {
          expires: auth.data.expires
        });
      } catch (e) {
        console.log(e);
        commit("loginAlert", e);
      }
    }
  },
  modules: {}
});
