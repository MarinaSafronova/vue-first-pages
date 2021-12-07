<template>
  <div class="team__card">
    <img src="@/assets/img/Ellipse.svg" alt="dacode">
    <h2 class="team__card-title">
      {{card.name}}
    </h2>
    <p class="team__card-text">
      {{card.company.catchPhrase}}
    </p>
    <a href="#" class="team__card-profile">
      <img src="@/assets/img/profile.svg" alt="dacode">
    </a>
    <base-button :btn-hero="true">
      <a href="#">{{card.email}}</a>
    </base-button>
  </div>

</template>

<script>
import BaseButton from "@/components/TheBaseButton";
export default {
  name: "card-team",
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
.team__card{
  background: var(--bg-card);
  box-shadow: 0px 24px 56px rgba(7, 0, 59, 0.12);
  border-radius: 12px;
  text-align: center;
  padding: 40px 5px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.team__card img{
  margin-bottom: 35px;
  max-width: 145px;
}
.team__card-profile img{
  margin: 9px 0 20px;
}

.team__card-title{
  font: 1.37rem/1.625rem CircularStd-Bold;
  font-weight: bold;
  color: var(--main-text-color);
  margin-bottom: 7px;
}
.team__card-text{
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--main-menu-color);
}
@media(max-width: 1500px){
  .team__card .btn a {
    font: 16px/21px "Circular Std";
  }
}
@media(max-width: 992px){
  .team__card{
    padding: 20px 30px 20px;
  }
  .team__card-title{
    font: 1.2rem/1.4rem CircularStd-Bold;
    font-weight: bold;
  }
  .team__card img{
    max-width: 100px;
    margin-bottom: 25px;
  }
}
</style>