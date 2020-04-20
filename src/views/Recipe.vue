<template>
  <div class="Recipe">
    <br />
    Przepis to {{ selectedRecipe.name }}
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

<style scoped>
</style>
