<template>
  <NavComp  />
  <CarouselComp v-if="$store.state.isAuthenticated" />
  <router-view/>
  <FooterComp v-if="$store.state.isAuthenticated" />
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
.nav-link{
  color: #e9d5cabb;
}

nav a.router-link-exact-active {
  color: #ffd500;
  font-weight: bold;
}
</style>