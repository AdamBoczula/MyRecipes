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

  row-gap: 5rem;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  padding: 1rem;
}
</style>
