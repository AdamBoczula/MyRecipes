<template>
  <transition name="reveal-details">
    <div class="tmp">
      <div class="my-animation" :class="{reveal: hover}"></div>
      <div
        class="RecipeCard"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        :style="{ backgroundImage: `url(${imageUrl})`}"
      >
        <div class="RecipeCard__Name RecipeCard--bar">{{name}}</div>
        <transition name="show-ingredients">
          <div class="RecipeCard__Ingredients" v-show="hover">
            <ul class="RecipeCard__Ingredients__List">
              <li
                v-for="ingredient in ingredients"
                :key="ingredient.name"
                class="RecipeCard__Ingredients__Item"
              >{{ingredient.name}}</li>
            </ul>
          </div>
        </transition>

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
.my-animation {
  position: absolute;
  opacity: 0.7;
  width: 256px;
}

.RecipeCard {
  background-repeat: no-repeat;
  background-size: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  height: 256px;
  width: 256px;

  transition: all 0.2s;

  display: flex;

  flex-direction: column;
  justify-content: space-between;

  &__InformationBar {
    display: flex;
    justify-content: space-between;
  }

  &__Name {
    margin-top: 1rem;
  }

  &__Ingredients {
    z-index: 100;
    padding: 0.4rem 0;
    color: #efefef;
    font-size: 0.8rem;
    height: 200px;
    overflow-y: auto;
  }

  &--bar {
    z-index: 100;
    padding: 0.5rem 1rem;
    background-color: #000;
    opacity: 0.6;
    color: #efefef;
  }
}

.reveal {
  width: 256px;
  -webkit-animation: tmp 0.2s forwards;
}

@-webkit-keyframes tmp {
  0% {
    height: 0;
    background-color: #000;
    opacity: 0.6;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    top: 331px;
  }
  100% {
    top: 74px;
    height: 256px;
    background-color: #000;
    opacity: 0.6;

    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
}

.show-ingredients-enter-active {
  transition: opacity 0.4s;
}
.show-ingredients-leave-active {
  transition: opacity 0.2s;
}
.show-ingredients-enter,
.show-ingredients-leave-to {
  opacity: 0;
}
</style>
