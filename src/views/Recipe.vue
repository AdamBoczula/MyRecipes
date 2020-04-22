<template>
  <div class="Recipe">
    <h2 class="Recipe__Name">{{ selectedRecipe.name }}</h2>
    <div class="Recipe__Container">
      <div class="Recipe__Img" :style="{ backgroundImage: `url(${selectedRecipe.imageUrl})`}"></div>
      <div class="Recipe__Information">
        <h3>{{ selectedRecipe.description }}</h3>
        <div class="Recipe__Ingredients">
          <h3>Składniki:</h3>
          <ul>
            <li
              v-for="ingredient in selectedRecipe.ingredients"
              :key="ingredient.name"
            >{{ingredient.name}} {{ingredient.quantity}} {{ingredient.unit}}</li>
          </ul>
        </div>
        <div class="Recipe__Duration">Czas przygotowania (ikona)</div>
        <div class="Recipe__NumberOfMeals">Ilość osób (ikona)</div>
      </div>
    </div>
  </div>
</template>

<script>
import { MUTATIONS } from '@/store/mutations';

export default {
  name: 'Recipe',
  components: {
  },
  computed: {
    selectedRecipe() {
      return this.$store.getters.selectedRecipe;
    },
  },
  destroyed() {
    this.$store.commit(MUTATIONS.SELECT_RECIPE, null);
  },
};
</script>

<style lang="scss" scoped>
.Recipe {
  padding: 5rem;

  &__Name {
    text-align: center;
    margin-bottom: 5rem;
  }

  &__Container {
    display: flex;
  }

  &__Img {
    min-width: 512px;
    min-height: 512px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }

  &__Information {
    margin: 0 auto;
    padding: 2rem;
  }
}
</style>
