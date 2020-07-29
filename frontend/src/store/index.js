import Vue from "vue";
import Vuex from "vuex";
import axios from "../auth-axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: null,
    recent: [],
    isLoading: false
  },
  mutations: {
    ISLOADING(state, loading) {
      state.isLoading = loading;
    },
    CONVERT_CURRENCY(state, result) {
      state.result = result;
    },
    RECENT(state, data) {
      data.map(el => {
        state.recent.push(el);
      });
    }
  },
  actions: {
    convert: ({ commit }, inputData) => {
      commit("ISLOADING", true);
      try {
        axios
          .post(`/latest/${inputData.from}`)
          .then(res => {
            console.log("response convert", res);
            let result;

            for (let key in res.data.conversion_rates) {
              if (key === inputData.to) {
                result = inputData.amount * res.data.conversion_rates[key];
              }
            }
            commit("CONVERT_CURRENCY", result);
            commit("ISLOADING", false);
          })
          .catch(error => console.log(error));
      } catch (err) {
        console.log(err);
      }
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
    isLoading: state => {
      return state.isLoading;
    },
    recent: state => {
      return state.recent;
    }
  }
});
