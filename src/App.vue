<template>
  <NavComp />
  <CarouselComp />
  <router-view />
  <FooterComp />
</template>
<script>
import NavComp from "@/components/NavComp.vue";

import FooterComp from "@/components/FooterComp.vue";
import CarouselComp from "./components/CarouselComp.vue";
export default {
  name: "App",
  components: {
    NavComp,
    FooterComp,
    CarouselComp
  },
  mounted(){
    this.$store.commit('UpdateCartFromLocalStorage');
    this.$store.commit('UpdateUserFromLocalStorage');
  }
}
</script>
<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  color: #E9D5CA;
}

.nav-link {
  color: #e9d5cabb;
}

nav a.router-link-exact-active {
  color: #ffd500;
  font-weight: bold;
}
</style>