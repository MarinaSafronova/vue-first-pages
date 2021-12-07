<template>
  <div class="home">
    <div class="container">
      <div class="hero">
        <div class="d-flex">
          <div class="block__text">
            <h1 class="hero__title">
              We help you create
              your <span> website</span>
            </h1>
            <p class="page__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus
            </p>
            <div class="d-flex">
              <base-button :btn-hero="true">
                Get Started
              </base-button>
              <base-button :btn-transparent="true">
                Contact Us
              </base-button>
            </div>
          </div>
          <div>
            <img src="@/assets/img/hero.png" alt="dacode" class="hero__img">
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="portfolio">
    <div class="container">
      <h3 class="portfolio__title">Portfolio</h3>
      <h2 class="section__title">
        Our Great Work
      </h2>
      <base-carousel/>
      <base-button btn-black="true">
        See All
      </base-button>
    </div>
  </section>
  <section class="section-idea">
    <div class="container">
      <div class="block__text">
        <h2 class="section__title">Your idea into <span>reality</span></h2>
        <p class="page__text">
          We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.
        </p>
        <div class="section-idea__content">
          <div class="idea-content__item">
            <div class="d-flex">
              <div class="icon">
                <span>1</span>
              </div>
              <div class="content__item">
                <h4 class="content__item-title">Your Idea</h4>
                <p class="content__item-text">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
              </div>
            </div>
          </div>
          <div class="idea-content__item">
            <div class="d-flex">
              <div class="icon">
                <span>2</span>
              </div>
              <div class="content__item">
                <h4 class="content__item-title">Strategy meeting</h4>
                <p class="content__item-text">This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.</p>
              </div>
            </div>
          </div>
          <div class="idea-content__item">
            <div class="d-flex">
              <div class="icon">
                <span>3</span>
              </div>
              <div class="content__item">
                <h4 class="content__item-title">Agile and Scrum framework</h4>
                <p class="content__item-text">In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.</p>
              </div>
            </div>
          </div>
          <div class="idea-content__item">
            <div class="d-flex">
              <div class="icon">
                <span>4</span>
              </div>
              <div class="content__item">
                <h4 class="content__item-title">Your website goes live</h4>
                <p class="content__item-text">
                  The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


</template>

<script>
// @ is an alias to /src

import BaseCarousel from "@/components/slider/BaseCarousel";
import BaseButton from "@/components/TheBaseButton";
export default {
  name: 'Home',
  components: {
    BaseButton,
    BaseCarousel
  }
}
</script>
<style>
.hero{
  padding: 2.5em 0 3em;
}
.hero .d-flex{
  align-items: center;
  justify-content: center;
}
h1.hero__title{
  font: 3.625rem/4.063rem "Circular Std";
  position: relative;
  font-style: normal;
  font-weight: 900;
  letter-spacing: -0.015em;
  max-width: 620px;
  margin-bottom: 1em;
}
h1.hero__title:before{
  content: '';
  position: absolute;
  top: -36px;
  left: 0;
  height: 4px;
  width: 110px;
  background: #7BC0E3;
}
h1.hero__title span{
  color: var(--main-menu-color);
}
.hero .block__text{
  min-width: 560px;
  max-width: 620px;
  width: 100%;
}
.block__text .d-flex{
  justify-content: flex-start;
}
.block__text .d-flex > div{
  margin-right: 18px;
}
.hero__img{
  max-width: 50em;
  width: 100%;
}
/*Portfolio Section*/
.portfolio{
  padding: 4.8125em 0 6.5625em;
  text-align: center;
  background-image: linear-gradient(to bottom, #ffffff 50%, #60e1ce 50%);
  position: relative;
}
.portfolio__title{
  font: 1.5rem/1.875rem CircularStd-Bold;
  font-weight: bold;
  letter-spacing: 0.006em;
  color: var(--main-text-portfolio);
  margin-bottom: 1em;
}
.portfolio .btn__black{
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translate(-50%, 0);
}
/*idea Section*/
.section-idea{
  padding: 12.5em 0 10em;
  background: url("../assets/img/Illustration.png") 100% 100% no-repeat fixed, url("../assets/img/idea1.png") 0 125% no-repeat, url("../assets/img/idea2.png") 98% 0 no-repeat;
  background-size: 780px, auto, auto;
  text-align: left!important;
}
.section-idea .block__text{
  max-width: 950px;
}
.idea-content__item{
  margin-bottom: 20px;
  max-width: 550px;
}
.idea-content__item .d-flex{
  justify-content: flex-start;
  align-items: flex-start;
}
.idea-content__item .icon span{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 82px;
  border-radius: 100%;
  background: #FFFFFF;
  box-shadow: 0px 32px 41px rgba(0, 0, 0, 0.13);
  margin-right: 50px;
  font: 2rem/2.5rem CircularStd-Black;
  font-weight: 900;
  letter-spacing: 0.006em;
  color: var(--main-text-portfolio);
}
.content__item-title{
  font: 1.5rem/1.875rem CircularStd-Bold;
  font-weight: bold;
  color: var(--main-menu-color);
  margin-bottom: 10px;
}

@media(max-width: 1500px){
  .hero .block__text {
    min-width: 490px;
    max-width: 500px;
  }
  .section-idea {
    padding: 8em 0 10em;
    background: url("../assets/img/Illustration.png") 100% 150% no-repeat, url("../assets/img/idea1.png") 0 125% no-repeat, url("../assets/img/idea2.png") 98% 0 no-repeat;
    background-size: 780px, auto, auto;
  }
}

@media(max-width: 992px){
  h1.hero__title{
    font: 2.625rem/2.8rem "Circular Std";
    font-weight: 900;
    letter-spacing: -0.015em;
    max-width: 550px;
    margin-bottom: 0.5em;
  }
  p.page__text{
    margin-bottom: 1.54em;
  }
  .hero .block__text {
    min-width: 270px;
    max-width: 280px;
  }
  .section-idea {
    padding: 8em 0 10em;
    background: url("../assets/img/Illustration.png") 100% 120% no-repeat, url("../assets/img/idea1.png") 0 125% no-repeat, url("../assets/img/idea2.png") 98% 0 no-repeat;
    background-size: 520px, auto, auto;
    background-attachment: scroll;
  }
  .portfolio{
    padding: 3em 0 4em;
    text-align: center;
    background-image: linear-gradient(to bottom, #ffffff 50%, #60e1ce 50%);
    position: relative;
  }
  .idea-content__item .icon span{
    width: 60px;
    height: 60px;
    margin-right: 20px;
    font: 1.4rem/1.4rem CircularStd-Black;
    font-weight: 900;
  }
}
@media(max-width: 640px){
  .hero .d-flex{
    flex-direction: column;
  }
  .hero .block__text {
    min-width: auto;
    max-width: 92%;
  }
  .block__text .d-flex{
    flex-direction: row;
  }
  .hero__img{
    margin: 15px auto 0;
  }
}
@media(max-width: 540px){
  .idea-content__item .icon span{
    width: 40px;
    height: 40px;
    margin-right: 20px;
    font: 1rem/1rem CircularStd-Black;
    font-weight: 900;
  }
  .block__text .d-flex > div {
    margin-right: 0;
  }
  .hero .block__text .d-flex > div{
    margin-right: 10px;
  }
  .section-idea {
    padding: 8em 0 17em;
    background: url("../assets/img/Illustration.png") 100% 105% no-repeat, url("../assets/img/idea1.png") 0 125% no-repeat, url("../assets/img/idea2.png") 98% 0 no-repeat;
    background-size: 370px, 200px, 200px;
  }
}
</style>
