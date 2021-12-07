<template>
  <div class="about__card">
    <img :src="require( '../assets/img/' + card.icon)" alt="dacode">
    <h2 class="about__card-title">
      {{card.title}}
    </h2>
    <p class="about__card-text">
      {{card.text}}
    </p>
    <base-button :btn-hero="true">
      <a href="#">Read More</a>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/TheBaseButton";

export default {
  name: "about-card",
  components: {BaseButton},
  props:{
    card:{
      type: Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.about__card{
  background: var(--bg-card);
  box-shadow: 0px 24px 56px rgba(7, 0, 59, 0.12);
  border-radius: 12px;
  text-align: center;
  padding-bottom: 30px;
}
.about__card img{
  border-radius: 12px;
  margin-bottom: 26px;
  width: 100%;
}
.about__card-title{
  font: 1.125rem/1.625rem CircularStd-Bold;
  font-weight: bold;
  color: var(--main-text-color);
  margin-bottom: 7px;
}
.about__card-text{
  font: 1rem/1.625rem "Circular Std";
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 294px;
  margin: 0 auto 20px;
}
@media(max-width: 992px){
  .about__card-title{
    font: 1.1rem/1.4rem CircularStd-Bold;
    font-weight: bold;
  }
  .about__card img{
    margin-bottom: 20px;
  }
  .about__card-text{
    font: 1rem/1.4rem "Circular Std";
    max-width: 220px;
    margin: 0 auto 15px;
  }
}
</style>