import Vue from 'vue';
import Vuex from 'vuex';

import { RECIPES } from './RECIPES_MOCK';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: RECIPES,
    selectedRecipe: null,
  },
  getters: {
    recipes: (state) => state.recipes,
    getSelectedRecipe: (state) => state.selectedRecipe,
  },
  mutations: {
    selectRecipe(state, newSelectedRecipe) {
      state.selectedRecipe = newSelectedRecipe;
    },
  },
  actions: {},
  modules: {},
});
