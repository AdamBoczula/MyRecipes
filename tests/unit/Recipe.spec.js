/* eslint-disable no-unused-vars */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import HelloWorld from '@/views/Recipe.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
// localVue.use(VueRouter);

describe('COMPONENT :: Recipe', () => {
  let store = null;
  let mutations = null;
  let getters = null;
  let wrapper = null;

  beforeEach(() => {
    mutations = {
      selectRecipe: jest.fn(),
    };
    getters = {
      selectedRecipe: jest.fn().mockReturnValue({
        id: '0',
        name: 'name',
        difficulty: 0,
        numberOfMeals: 0,
        ingredients: [],
        duration: { hour: '0', minutes: '30' },
        imageUrl: 'imageUrl',
      }),
    };
    store = new Vuex.Store({
      mutations,
      getters,
    });
  });
  beforeEach(() => {
    // given
    wrapper = shallowMount(HelloWorld, {
      store,
      localVue,
    });
  });

  test('should be created', async () => {
    // when
    await wrapper.vm.$nextTick();
    // then
    expect(wrapper).toBeDefined();
  });

  test('should get selectedRecipe from store', async () => {
    // when
    await wrapper.vm.$nextTick();
    // then
    expect(getters.selectedRecipe).toHaveBeenCalled();
  });

  describe('destroyed()', () => {
    test('should set selectedRecipe as null', async () => {
      // when
      await wrapper.vm.$nextTick();
      wrapper.destroy();
      // then
      expect(mutations.selectRecipe).toHaveBeenCalledTimes(1);
      expect(mutations.selectRecipe).toHaveBeenCalledWith({}, null);
    });
  });
});
