<template>
  <div>
    <the-header>
      <template v-slot:hero-title>
        What we can offer your SaaS Business
      </template>
      <template v-slot:hero-text>
        We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns.
      </template>
    </the-header>
    <div class="container">
      <div class="services__container">
        <h2 class="section__title">Our Services</h2>
        <p class="page__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et.
        </p>
        <div class="d-grid">
          <card-services
              v-for="card in SERVICES"
              :key="card.id"
              :card="card"
          />
        </div>
      </div>
    </div>
    <the-email/>
    <section class="schedule-section">
      <div class="container">
        <div class="d-flex">
          <div class="block-text">
            <h2 class="section__title">Establishing online presence</h2>
            <p class="page__text">
              Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions.
              This goes hand in hand with a responsive design, meaning it needs to be apt for different devices.
            </p>
            <p class="page__text">
              We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.
            </p>
            <p class="page__text">
              The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.
            </p>
            <p class="page__text">
              We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.
            </p>
          </div>
          <div>
            <img src="@/assets/img/schedule.png" alt="schedule">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "@/layout/TheHeader";
import CardServices from "@/components/TheCardServices";
import TheEmail from "@/layout/TheEmail";
import {mapGetters} from 'vuex';

export default {
  name: "Services",
  components: {TheEmail, CardServices, TheHeader},
  computed: mapGetters(['SERVICES'])
}
</script>

<style scoped>
.services__container{
  background: #E9FBF8;
  border-radius: 40px;
  padding: 100px 0;
  text-align: center;
  margin: -100px 0 80px;
}
.services__container p.page__text{
  max-width: 760px;
  margin: 0 auto 45px;
  text-align: center;
}
.services__container .d-grid{
  display: grid;
  grid-template-columns: repeat(3, 360px);
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  row-gap: 30px;
}
.schedule-section{
  padding: 80px 0;
}
.schedule-section .block-text{
  max-width: 680px;
}
.schedule-section .d-flex{
  align-items: center;
}
.schedule-section p.page__text{
  margin-bottom: 1.2em;
}
.schedule-section img{
  width: 100%;
}
@media(max-width: 1500px){
  .services__container .d-grid{
    grid-template-columns: repeat(3, 300px);
    column-gap: 20px;
    align-items: stretch;
  }
  .schedule-section .d-flex{
    flex-direction: column;
    align-items: center;
  }
  .schedule-section img{
    margin-top: 20px;
  }
}
@media(max-width: 992px){
  .services__container .d-grid{
    grid-template-columns: repeat(3, 240px);
    column-gap: 10px;
    row-gap: 10px;
  }
}
@media(max-width: 640px){
  .services__container .d-grid{
    grid-template-columns: repeat(1, 90%);
    column-gap: 10px;
    row-gap: 10px;
  }
  .services__container{
    padding: 40px 5px;
    margin: -40px 0 40px;
  }
}
</style>