<template>
  <div class="header__hero">
      <div class="container">
        <h1 class="header__hero-title">
          <slot name="hero-title"></slot>
        </h1>
        <p class="header__hero-text">
          <slot name="hero-text"></slot>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "the-header"
}
</script>

<style scoped>
.header__hero{
  background: #60E1CB url("../assets/img/email-section.svg") 0 0 no-repeat;
  padding: 9.375em 0 14em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
}
.header__hero .container{
  max-width: 65em;
}
.header__hero h1.header__hero-title{
  font: 3.625rem/4.063rem CircularStd-Black;
  font-weight: 900;
  letter-spacing: -0.015em;
  margin-bottom: 19px;
}
p.header__hero-text{
  font: 1.25rem/1.875rem "Circular Std";
  font-weight: 500;
  max-width: 53em;
  margin: 0 auto;
  color: rgba(41, 37, 37, 0.6);
}
@media(max-width: 991px){
  .header__hero{
    padding: 4.375em 0 8em;
  }
  p.header__hero-text{
    font: 1rem/1.2rem "Circular Std";
    font-weight: 500;
    max-width: 500px;
    width: 100%;
  }
  .header__hero .container{
    max-width: 40em;
  }
  .header__hero h1.header__hero-title{
    font: 2rem/2.4rem CircularStd-Black;
    font-weight: 900;
  }
}
</style>