<template>
  <div class="RecipeList">
    <recipe-card
      v-for="recipe in getRecipes"
      :key="recipe.id"
      :name="recipe.name"
      :difficulty="recipe.difficulty"
      :numberOfMeals="recipe.numberOfMeals"
      :ingredients="recipe.ingredients"
      :duration="recipe.duration"
      :imageUrl="recipe.imageUrl"
    ></recipe-card>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'RecipeListGrid',
  components: { RecipeCard },
  computed: {
    getRecipes() {
      return this.$store.getters.recipes;
    },
  },
};
</script>

<style scoped>
</style>
