import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      currentTime : Date,
      dialog: false
  },
  mutations: {},
  actions: {},
  getters: {
    getCurrentTime: state => {
        state.currentTime = new Date().toLocaleTimeString()
        return state.currentTime
      },
  },
});