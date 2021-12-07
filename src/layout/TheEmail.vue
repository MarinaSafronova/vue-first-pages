<template>
  <div class="contact-btn">
    <h3>Interested to work with us ?</h3>
    <p>Send a line here get and update daily</p>
    <base-button btn-contact="true">
      <a href="#">DaCode@example.com</a>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/TheBaseButton";
export default {
  name: "the-email",
  components: {BaseButton}
}
</script>

<style scoped>
.contact-btn{
  text-align: center;
  padding: 10.063em 0;
  background: #60E1CB url("../assets/img/email-section.svg") 0 0 no-repeat;
  color: var(--main-text-black);
}
h3{
  font: 3rem/3.813rem CircularStd-Bold;
  font-weight: bold;
  margin-bottom: 27px;
}
p{
  font: 1.5rem/1.563rem "Circular Std";
  font-style: normal;
  font-weight: normal;
  margin-bottom: 60px;
}

@media(max-width: 1500px){
  .contact-btn {
    padding: 5.063em 0;
  }
}

@media(max-width: 992px){
  h3{
    font: 1.65rem/2rem CircularStd-Bold;
    font-weight: bold;
    margin-bottom: 25px;
  }
  .contact-btn {
    padding: 3.063em 0;
  }
  p{
    font: 1.2rem/1.4rem "Circular Std";
    margin-bottom: 40px;
  }
}


</style>