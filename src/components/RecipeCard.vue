<template>
  <div class="RecipeCard" :style="{ backgroundImage: `url(${imageUrl})`}">
    <div class="RecipeCard__Name RecipeCard--bar">{{name}}</div>
    <div class="RecipeCard__InformationBar RecipeCard--bar">
      <span class="RecipeCard__InformationBar__Duration">
        <i class="fa fa-clock-o"></i>
        {{duration.hour}}h {{duration.minutes}}m
      </span>
      <span class="RecipeCard__InformationBar__NumberOfMeals">
        <i class="fa fa-users"></i>
        {{numberOfMeals}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    name: String,
    difficulty: Number,
    numberOfMeals: Number,
    duration: Object,
    imageUrl: String,
  },
};
</script>

<style lang="scss" scoped>
.RecipeCard {
  display: flex;
  flex-direction: column;

  padding-top: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  background-repeat: no-repeat;
  background-size: 100%;

  height: 250px;

  justify-content: space-between;

  // &__Name {
  // }

  &__InformationBar {
    display: flex;
    justify-content: space-between;
  }

  &--bar {
    padding: 0.5rem 1rem;
    background-color: #000;
    opacity: 0.6;
    color: #efefef;
  }
}
</style>
