<template>
  <div
    class="u-pos-rel animation-created"
    @click="selectRecipe"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="reveal">
      <div class="reveal-animation-trigger" :class="{reveal: hover}"></div>
      <div class="RecipeCard" :style="{ backgroundImage: `url(${recipe.imageUrl})`}">
        <div class="RecipeCard__Name RecipeCard--bar">{{recipe.name}}</div>
        <transition name="show-ingredients">
          <div class="RecipeCard__Ingredients" v-show="hover">
            <ul class="RecipeCard__Ingredients__List">
              <li
                v-for="ingredient in recipe.ingredients"
                :key="ingredient.name"
                class="RecipeCard__Ingredients__Item"
              >{{ingredient.name}}</li>
            </ul>
          </div>
        </transition>

        <div class="RecipeCard__InformationBar RecipeCard--bar">
          <span class="RecipeCard__InformationBar__Duration">
            <i class="fa fa-clock-o"></i>
            {{recipe.duration.hour}}h {{recipe.duration.minutes}}m
          </span>
          <span class="RecipeCard__InformationBar__NumberOfMeals">
            <i class="fa fa-users"></i>
            {{recipe.numberOfMeals}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MUTATIONS } from '@/store/mutations';

export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      id: String,
      name: String,
      difficulty: Number,
      numberOfMeals: Number,
      ingredients: Array,
      duration: Object,
      imageUrl: String,
    },
  },
  data() {
    return {
      hover: false,
      visible: false,
    };
  },
  created() {
    this.visible = true;
  },
  destroyed() {
    this.visible = false;
  },
  methods: {
    selectRecipe() {
      this.$store.commit(MUTATIONS.SELECT_RECIPE, this.recipe);
    },
  },
};
</script>

<style lang="scss" scoped>
.reveal-animation-trigger {
  position: absolute;
  width: 256px;
  opacity: 0.6;
}

// move it to utilities by adding webpack configuration
.u-pos-rel {
  position: relative;
}

.reveal {
  width: 256px;
  animation: reveal 0.2s forwards;
}

@keyframes reveal {
  0% {
    height: 0;
    background-color: #000;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    top: 256px;
  }
  100% {
    top: 0;
    height: 256px;
    background-color: #000;

    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
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

// .visible-enter-active,
// .visible-leave-active {
//   transition: all 2s;
// }
// .visible-enter {
//   opacity: 0;
//   transform: translateX(-100px);
// }

// .visible-leave-to {
//   opacity: 1;
//   transform: translateX(100px);
// }

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

  cursor: pointer;

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

.animation-created {
  animation: created 0.3s forwards;
}

@keyframes created {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
