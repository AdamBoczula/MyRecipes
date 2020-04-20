import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/RecipeCard.vue';

describe('COMPONENT :: RecipeCard', () => {
  it('should be created', async () => {
    const props = {
      name: 'name',
      difficulty: 0,
      numberOfMeals: 0,
      ingredients: [],
      duration: { hour: '0', minutes: '30' },
      imageUrl: 'imageUrl',
    };
    const wrapper = shallowMount(HelloWorld, {
      propsData: props,
    });

    await wrapper.vm.$nextTick();

    expect(wrapper).toBeDefined();
  });
});
