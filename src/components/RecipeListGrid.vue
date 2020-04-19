<template>
  <div class="RecipeList">
    <recipe-card
      v-for="recipe in getRecipes"
      v-bind:key="recipe.id"
      v-bind:name="recipe.name"
      v-bind:difficulty="recipe.difficulty"
      v-bind:numberOfMeals="recipe.numberOfMeals"
      v-bind:duration="recipe.duration"
      v-bind:imageUrl="recipe.imageUrl"
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
