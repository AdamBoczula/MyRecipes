<template>
  <transition name="reveal-details">
    <div
      class="RecipeCard"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :style="{ backgroundImage: `url(${imageUrl})`}"
    >
      <div class="RecipeCard__Container" :class="{reveal: hover}">
        <div class="RecipeCard__Name RecipeCard--bar">{{name}}</div>
        <div class="RecipeCard__Ingredients" v-show="hover">
          <ul class="RecipeCard__Ingredients__List">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.name"
              class="RecipeCard__Ingredients__Item"
            >{{ingredient.name}}</li>
          </ul>
        </div>

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
    </div>
  </transition>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    name: String,
    difficulty: Number,
    numberOfMeals: Number,
    ingredients: Array,
    duration: Object,
    imageUrl: String,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.RecipeCard {
  background-repeat: no-repeat;
  background-size: 100%;

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  height: 250px;

  transition: all 0.2s;

  &__Container {
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    padding-top: 1rem;

    height: 100%;
    width: 100%;
  }
  &:hover {
    z-index: 10;
    scale: 1.2;
  }

  &__InformationBar {
    display: flex;
    justify-content: space-between;
  }

  &__Ingredients {
    padding: 0.4rem 0;
    color: #efefef;
    font-size: 0.8rem;
    height: 200px;
    overflow-y: auto;
  }

  &--bar {
    padding: 0.5rem 1rem;
    background-color: #000;
    opacity: 0.6;
    color: #efefef;
  }

  // .reveal-details-enter-active {

  // }

  // .reveal-details-enter-active {
  // }

  // .reveal-details-enter,
  // .reveal-details-leave-to {
  // }
}

.reveal {
  position: relative;
  height: 0;
  -webkit-animation: tmp 1s;
}

@-webkit-keyframes tmp {
  0% {
    height: 0;
    background-color: #000;
    opacity: 0.3;
  }
  100% {
    height: 100%;
    background-color: #000;
    opacity: 0.3;
  }
}
</style>
