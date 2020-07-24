import Vue from "vue";
import Vuex from "vuex";
import axios from "../auth-axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amount: null,
    from: "",
    to: "",
    result: null
  },
  mutations: {
    CONVERT_CURRENCY(state, result) {
      state.result = result;
    },
    INPUT(state, { amount, from, to }) {
      state.amount = amount;
      state.from = from;
      state.to = to;
    }
  },
  actions: {
    convert: ({ commit }, form) => {
      axios
        .post(`${process.env.VUE_APP_API_KEY}/latest/${form.from}`)
        .then(res => {
          let result;

          for (let key in res.data.conversion_rates) {
            if (key === form.to) {
              result = form.amount * res.data.conversion_rates[key];
            }
          }
          commit("CONVERT_CURRENCY", result);
        })
        .catch(error => console.log(error));
    },
    input: ({ commit }, form) => {
      commit("INPUT", form);
    }
  },
  modules: {},
  getters: {
    result: state => {
      return state.result;
    },
    amount: state => {
      return state.amount;
    },
    from: state => {
      return state.from;
    },
    to: state => {
      return state.to;
    }
  }
});
