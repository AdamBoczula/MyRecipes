<template>
  <div class="RecipeList">
    <recipe-list-grid></recipe-list-grid>
  </div>
</template>

<script>
import RecipeListGrid from '@/components/RecipeListGrid.vue';

export default {
  name: 'RecipeList',
  components: { RecipeListGrid },
};
</script>

<style lang="scss" scoped>
.RecipeList {
  display: grid;

  grid-gap: 1rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  padding: 1rem;
}
</style>
