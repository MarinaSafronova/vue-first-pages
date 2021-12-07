<template>
  <div class="about">
    <the-header>
      <template v-slot:hero-title>
        News & Articles
      </template>
      <template v-slot:hero-text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
      </template>
    </the-header>
    <div class="about__content">
      <div class="container">
        <div class="d-grid">
          <about-card
              v-for="card in ABOUT"
              :key="card.id"
              :card="card"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from "@/layout/TheHeader";
import AboutCard from "@/components/TheAboutCard";
import {mapGetters} from 'vuex';
export default {
  components: {AboutCard, TheHeader},
  computed: mapGetters(['ABOUT'])
}
</script>
<style scoped>

.about .d-grid{
  margin: -100px 0 80px;
  display: grid;
  grid-template-columns: repeat(4, 325px);
  justify-content: center;
  align-items: center;
  column-gap: 25px;
  row-gap: 60px;
}

@media(max-width: 1500px){
  .about .d-grid{
    grid-template-columns: repeat(3, 300px);
    column-gap: 20px;
    row-gap: 40px;
  }
}
@media(max-width: 992px){
  .about .d-grid{
    grid-template-columns: repeat(2, 280px);
    column-gap: 10px;
    row-gap: 10px;
  }
}
@media(max-width: 640px) {
  .about .d-grid {
    grid-template-columns: repeat(1, 90%);
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>

