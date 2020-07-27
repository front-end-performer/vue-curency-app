import Vue from "vue";
import Vuex from "vuex";
import axios from "../auth-axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amount: null,
    from: "",
    to: "",
    result: null,
    recent: []
  },
  mutations: {
    CONVERT_CURRENCY(state, result) {
      state.result = result;
    },
    INPUT(state, { amount, from, to }) {
      state.amount = amount;
      state.from = from;
      state.to = to;
    },
    RECENT(state, data) {
      console.log("data", data);
      data.map(el => {
        state.recent.push(el);
      });
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
      setTimeout(() => {
        commit("INPUT", form);
      }, 800);
    },
    initialHistory: ({ commit }) => {
      axios
        .get("http://localhost:8081/api/recent")
        .then(item => {
          let data = item.data.conversions;
          commit("RECENT", data);
        })
        .catch(error => {
          console.log(error);
        });
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
    },
    recent: state => {
      return state.recent;
    }
  }
});
