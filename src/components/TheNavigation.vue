<template>
  <div :class="{'scrolled-nav': scrolledNav}" class="navbar">
    <div class="container">
      <nav>
        <div class="branding">
          <img src="@/assets/img/logo.png" alt="DACODE">
        </div>
        <ul v-show="!IS_MOBILE" class="navigation">
          <li><router-link class="link" to="/" exact>Home</router-link></li>
          <li><router-link class="link" to="/about">About</router-link></li>
          <li><router-link class="link" to="/team">Team</router-link></li>
          <li><router-link class="link" to="/services">Services</router-link></li>
          <li>
            <base-button @click="clickBtn">Request a quote</base-button>
          </li>
        </ul>

        <div>
          <p @click="toggleMobileNav" v-show="IS_MOBILE" class="icon icon-menu" :class="{'icon-active': mobileNav}">
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link class="link" to="/">Home</router-link></li>
            <li><router-link class="link" to="/about">About</router-link></li>
            <li><router-link class="link" to="/team">Team</router-link></li>
            <li><router-link class="link" to="/services">Services</router-link></li>
            <li>
              <base-button @click="clickBtn" :disabled="false">Request a quote</base-button>
            </li>
          </ul>
        </transition>
      </nav>
    </div>

  </div>
</template>

<script>
import BaseButton from "@/components/TheBaseButton";
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "my-navigation",
  components: {BaseButton},
  data(){
    return{
      scrolledNav: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  computed: {
    ...mapGetters(['IS_MOBILE', 'IS_DESKTOP'])
  },
  methods: {
    ...mapActions(['SET_MOBILE', 'SET_DESKTOP']),
    updateScroll() {
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50){
        this.scrolledNav = true;
      }else{
        this.scrolledNav = false;
      }
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 1024){
        this.SET_MOBILE()
        this.mobileNav = true;
      }else{
        this.SET_DESKTOP()
        this.mobileNav = false;
      }
      this.mobileNav = false;
    }
  },
};
</script>

<style scoped>
.navbar{
  background: #FFFFFF;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  left: 0;
}
nav{
  display: flex;
  justify-content: space-between;
  padding: 1.4em 0;
  transition: .5s ease all;
  width: 100%;
  margin: 0 auto;
}

.navigation{
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  margin-right: 30px;
}
.link{
  color: #60E1CB;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.438rem;
  transition: .5s ease all;
  border-bottom: 1px solid transparent;
}
a.link:focus, a.link:active {
  outline: none;
  color: #60E1CB;
}
.link:hover{
  color: #000000;
}
ul.navigation li{
  padding: 0.938rem;
  list-style: none;
  color: #60E1CB;
  margin-left: 0.9375em;
}
@media(min-width: 1440px){
  nav{
    max-width: 1460px;
  }
}
.branding{
  display: flex;
  align-items: center;
}
.branding img{
  width: 100%;
  transition: .5s ease all;
}
.icon{
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10px;
  height: 100%;
  flex-direction: column;
}
.icon-menu span {
  display: block;
  width: 24px;
  height: 4px;
  margin-bottom: 3px;
  border-radius: 5px;
  background-color: var(--main-text-color);
  transition: .5s ease all;
}

.icon-menu.icon-active span {
  transform: scale(0);
}
.icon-menu.icon-active span:first-child {
  transform: rotate(-45deg);
  position: relative;
  top: 10px;
}
.icon-menu.icon-active span:last-child {
  position: relative;
  transform: rotate(45deg);
  top: -4px;
}

.dropdown-nav{
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 280px;
  height: 100%;
  background: #F3FFFD;
  top: 0;
  left: 0;
  transition: .5s ease all;
  padding: 40px 10px 10px 35px;
}
.dropdown-nav li{
  margin-left: 0;
  margin-bottom: 25px;
}
.dropdown-nav li .link{
  color: black;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-280px);
}
.mobile-nav-enter-to{
  transform: translateX(0);
}
.scrolled-nav{
  background: #faf4f5;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
}
.scrolled-nav .branding img{
  width: 80%;
}
@media(max-width: 1024px){
  .scrolled-nav{
    height: 75px;
  }
  .scrolled-nav .branding img{
    width: 60%;
  }
  .branding img{
    width: 60%;
  }
  .dropdown-nav .btn{
    position: absolute;
    left: 30px;
    bottom: 50px;
  }
}
.router-link-active{
  color: black;
}
</style>