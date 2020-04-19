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
