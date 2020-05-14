import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      currentTime : Date
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