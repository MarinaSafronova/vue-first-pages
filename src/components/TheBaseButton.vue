<template>
  <div
      @click="click"
      :class="btnStyle"
      class="btn"
  >
    <transition name="component-fade">
      <slot></slot>
    </transition>
  </div>

</template>

<script>
export default {
  name: "base-button",
  props:{
    disabled:{
      type: Boolean,
      default: false
    },
    btnBlack: {
      type: Boolean,
      default: false
    },
    btnContact: {
      type: Boolean,
      default: false
    },
    btnTransparent: {
      type: Boolean,
      default: false
    },
    btnHero: {
      type: Boolean,
      default: false
    },

  },
  data(){
    return {}
  },
  computed: {
    btnStyle(){
      return{
        'btn__disabled':this.disabled,
        'btn__black':this.btnBlack,
        'btn__contact':this.btnContact,
        'btn__transparent':this.btnTransparent,
        'btn__hero': this.btnHero
      }
    }
  },
  methods: {
    click(){
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 12px 25px;
  height: 50px;
  background-color: #7BC0E3;
  border-radius: 30px;
  color: var(--white-color);
  font: 18px/24px "Circular Std";
  cursor: pointer;
  transition: all 1s ease;
  letter-spacing: 0.005em;
  min-width: 188px;
}

.btn__black{
  background: #292525;
  box-shadow: 0px 46px 52px rgba(96, 225, 203, 0.56);
  font-size: 24px;
  font-weight: bold;
  height: 74px;
  min-width: 211px;
  border-radius: 50px;
}
.btn__contact{
  background: #292525;
  box-shadow: 0px 46px 52px #36B8A2;
  font-size: 22px;
  font-weight: 600;
  height: 84px;
  min-width: 410px;
  border-radius: 65px;
}
.btn__transparent{
  border: 1px solid rgba(7, 0, 59, 0.17);
  box-sizing: border-box;
  filter: drop-shadow(0px 14px 39px rgba(15, 35, 37, 0.3));
  font-size: 20px;
  background-color: transparent;
  color: #60E1CB;

}
.btn__hero{
  background: #60E1CB;
  font-size: 20px;
}
.btn__transparent:hover, .btn__hero:hover{
  box-shadow: 0px 15px 20px rgba(96, 225, 203, 0.56);
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: 1s ease all;
}

@media(max-width: 1500px){
  .btn{
    padding: 12px 15px;
    font: 16px/21px "Circular Std";
  }
}
@media(max-width: 992px){
  .btn{
    min-width: auto;
  }
  .btn__contact{
    min-width: 260px;
    height: 60px;
  }
  .btn__black{
    min-width: 150px;
    height: 60px;
  }
}

</style>