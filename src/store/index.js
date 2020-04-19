import Vue from 'vue';
import Vuex from 'vuex';

import { RECIPES } from './RECIPES_MOCK';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: RECIPES,
  },
  mutations: {},
  actions: {},
  modules: {},
});
