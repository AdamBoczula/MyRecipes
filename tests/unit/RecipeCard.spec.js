/* eslint-disable no-unused-vars */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import HelloWorld from '@/components/RecipeCard.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
// localVue.use(VueRouter);

describe('COMPONENT :: RecipeCard', () => {
  let props = null;
  let store = null;
  let $router = null;
  let actions = null;
  let mutations = null;
  let wrapper = null;

  beforeEach(() => {
    actions = {};
    mutations = {
      selectRecipe: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      mutations,
    });
    $router = {
      push: jest.fn(),
    };
  });
  beforeEach(() => {
    // given
    props = {
      recipe: {
        id: '0',
        name: 'name',
        difficulty: 0,
        numberOfMeals: 0,
        ingredients: [],
        duration: { hour: '0', minutes: '30' },
        imageUrl: 'imageUrl',
      },
    };
    wrapper = shallowMount(HelloWorld, {
      store,
      localVue,
      mocks: {
        $router,
      },
      propsData: props,
    });
  });

  test('should be created', async () => {
    // when
    await wrapper.vm.$nextTick();
    // then
    expect(wrapper).toBeDefined();
  });

  describe('selectRecipe()', () => {
    test('should set selectedRecipeId', async () => {
      // when
      await wrapper.vm.$nextTick();
      wrapper.vm.selectRecipe();
      // then
      expect(mutations.selectRecipe).toHaveBeenCalledTimes(1);
      expect(mutations.selectRecipe).toHaveBeenCalledWith({}, props.recipe);
    });

    test('should push new view for recipe', async () => {
      // when
      await wrapper.vm.$nextTick();
      wrapper.vm.selectRecipe();
      // then
      expect($router.push).toHaveBeenCalledTimes(1);
      expect($router.push).toHaveBeenCalledWith('/recipe');
    });
  });
});
