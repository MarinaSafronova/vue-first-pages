<template>
  <div class="card__services">
    <img :src="require( '../assets/img/icons/' + card.icon)" alt="Services">
    <h2 class="card__services-title">
      {{card.title}}
    </h2>
    <p class="card__services-text">
      {{card.text}}
    </p>
    <a href="#" class="card__services-link" target="_blank">
      Read more
    </a>
  </div>
</template>

<script>
export default {
  name: "card-services",
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

<style>
.card__services{
  background: var(--bg-card);
  box-shadow: 0px 97px 90px rgba(7, 0, 59, 0.12);
  border-radius: 12px;
  border-top: 10px solid var(--main-menu-color);
  padding: 60px 47px 42px 20px;
  text-align: left;
}
.card__services-title{
  font: 1.25rem/1.563rem CircularStd-Bold;
  font-weight: bold;
  margin: 34px 0 16px;
  color: var(--main-text-color);
}
.card__services-text{
  margin-bottom: 40px;
  font: 1rem/1.313rem "Circular Std";
  color: var(--main-text-black);
  font-weight: 500;
}
a.card__services-link{
  font: 0.875rem/1.125rem CircularStd-Bold;
  font-weight: bold;
  color: var(--main-text-portfolio);
  position: relative;
  transition: all 0.8ms ease;
}
a.card__services-link:after{
  content: '';
  position: absolute;
  right: -30px;
  top: 39%;
  width: 25px;
  height: 8px;
  background: url("../assets/img/icons/arrow.svg") 0 0 no-repeat;
  background-size: contain;
}
a.card__services-link:hover:after{
  right: -34px;
}
@media(max-width: 992px){
  .card__services{
    padding: 20px 30px;
  }
  .card__services-title{
    font: 1.2rem/1.4rem CircularStd-Bold;
    font-weight: bold;
  }
}
</style>