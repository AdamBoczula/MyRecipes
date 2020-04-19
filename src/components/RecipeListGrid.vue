<template>
  <div class="RecipeList">RecipeListGrid</div>
</template>

<script>
export default {
  name: 'RecipeListGrid',
  computed: {
    getRecipes() {
      debugger;
      return this.$store.getters.recipes;
    },
  },
};
</script>

<style scoped>
</style>
