import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("https://irinawinter.github.io/online-shop-vue/db", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {},
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
});
