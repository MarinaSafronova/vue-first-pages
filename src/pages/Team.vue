<template>
  <div class="team">
   <the-header>
     <template v-slot:hero-title>
       The Team
     </template>
     <template v-slot:hero-text>
       Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world.
     </template>
   </the-header>
    <div class="container">
      <div class="d-grid">
        <card-team
            v-for="card in USERS"
            :key="new Date()"
            :card="card"
        />
      </div>
    </div>

  </div>
</template>

<script>
import TheHeader from "@/layout/TheHeader";
import CardTeam from "@/components/TheCardTeam";
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "Team",
  components: {CardTeam, TheHeader},
  computed: mapGetters(["USERS"]),
  methods: mapActions(['FETCH_USERS']),
  async mounted(){
    this.FETCH_USERS();
  }
};
</script>

<style scoped>

.team .d-grid{
  margin: -100px 0 80px;
  display: grid;
  grid-template-columns: repeat(4, 325px);
  justify-content: center;
  align-items: center;
  column-gap: 25px;
  row-gap: 60px;
}

@media(max-width: 1500px){
  .team  .d-grid{
    grid-template-columns: repeat(3, 300px);
    column-gap: 20px;
    row-gap: 40px;
    align-items: stretch;
  }
}
@media(max-width: 991px){
  .team  .d-grid{
    grid-template-columns: repeat(2, 260px);
    column-gap: 10px;
    row-gap: 10px;
  }
}
@media(max-width: 640px){
  .team  .d-grid{
    grid-template-columns: repeat(1, 90%);
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>