<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="item in SLIDER" :key="item">
      <div class="carousel__item">
        <div class="slide__img">
          <img :src="require(`@/assets/img/${item.img}`)">
        </div>
        <div class="slide__text">
          <p>{{item.textSlide}}</p>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import {mapGetters} from 'vuex'

export default {
  name: 'base-carousel',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  computed: mapGetters(['SLIDER']),
  data(){
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        // 1024 and up
        991: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    }
  }
};
</script>

<style>
.slide__img{
  height: 298px;
  margin-bottom: 2em;
}
.slide__img img{
  width: 100%;
}
.carousel__item{
  max-width: 472px;
  text-align: left;
  margin: 40px 5px;
}
.slide__text p{
  margin-top:  1.875em;
  font: 1.125rem/1.938rem Circular Std;
  color: #000000;
}
.carousel__prev, .carousel__next{
  top: 38%;
  width: 64px;
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 24px 32px rgba(59, 59, 59, 0.32);
}
.carousel__prev .carousel__icon, .carousel__next .carousel__icon{
  fill: #7BC0E3;
  width: 32px;
  height: 32px;
}
@media(max-width: 1500px){
  .carousel__item{
    max-width: 300px;
  }
  .slide__img{
    height: auto;
  }
  .carousel__prev, .carousel__next {
    top: 36%;
  }
  .carousel__prev{
    left: 3%;
  }
  .carousel__next{
    right: 3%;
  }
}
@media (max-width: 1024px) {
  .slide__text p{
    margin-top:  1.2em;
    font: 1rem/1.4em Circular Std;
  }
}
</style>