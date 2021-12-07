<template>
  <footer class="footer">
    <div class="container">
      <div class="d-flex">
        <div class="block__text">
          <h2 class="section__title">Dacode</h2>
          <p class="page__text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div class="footer__info">
          <div class="column">
            <span class="column__title">
              Work
            </span>
            <ul>
              <li>Blog</li>
              <li>How We Work</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div class="column">
            <span class="column__title">
              Services
            </span>
            <ul>
              <li>Marketing Strategy</li>
              <li>Website Optimization</li>
              <li>Email Maerketing</li>
            </ul>
          </div>
          <div class="column">
            <span class="column__title">
              Business Solution
            </span>
            <ul>
              <li>Partnership</li>
              <li>About Project</li>
              <li>Corporate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "the-footer"
}
</script>

<style scoped>
footer{
  background: #60E1CB url("../assets/img/email-section.svg") 0 0 no-repeat;
  padding: 100px 0;
  background-size: cover;
}
.footer .footer__info{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 50em;
  width: 100%;
  margin-left: 40px;
}
.footer .d-flex{
  padding-bottom: 46px;
  border-bottom: 1px solid #FFFFFF;
  align-items: flex-start;
  justify-content: space-between;
}
.footer .block__text{
  max-width: 390px;
}
.footer .column{
 flex: 1 1 33.33%;
  width: 100%;
}
span.column__title{
  display: block;
  font: 1.188rem/1.5rem CircularStd-Bold;
  font-weight: bold;
  margin-bottom: 30px;
}
.column ul li{
  display: block;
  margin-bottom: 10px;
  line-height: 1.875rem;
  color: rgba(41, 37, 37, 0.4);
  mix-blend-mode: normal;
}
@media(max-width: 991px){
  .footer .d-flex{
    flex-direction: column;
    border: none;
    padding-bottom: 10px;
  }
  .footer .footer__info{
    max-width: 40em;
    width: 100%;
    margin-left: 0;
    flex-wrap: wrap;
  }
  span.column__title{
    margin-bottom: 15px;
  }
}
@media(max-width: 680px){
  .footer .column{
    flex: 1 1 100%;
    width: 100%;
    margin-bottom: 10px;
  }
  footer{
    padding: 40px 0;
  }
}
</style>