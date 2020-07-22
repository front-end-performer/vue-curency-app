import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: null
  },
  mutations: {
    CONVERT_CURRENCY(state, result) {
      state.result = result;
      console.log("store==>", state, result);
    }
  },
  actions: {
    convert: ({ commit }, form) => {
      axios
        .post(`https://v6.exchangerate-api.com/v6//latest/${form.items1}`)
        .then(res => {
          let result;

          for (let key in res.data.conversion_rates) {
            if (key === form.items2) {
              result = form.amount * res.data.conversion_rates[key];
            }
          }
          commit("CONVERT_CURRENCY", result);
        })
        .catch(error => console.log(error));
    }
  },
  modules: {},
  getters: {
    result: state => {
      return state.result;
    }
  }
});
