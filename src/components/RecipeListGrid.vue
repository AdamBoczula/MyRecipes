<template>
  <div class="RecipeList">
    <recipe-card v-for="recipe in getRecipes" :key="recipe.id" :recipe="recipe"></recipe-card>
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
