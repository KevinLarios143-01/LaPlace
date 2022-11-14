<template>
    <MDBCarousel v-model="carousel1" :items="items1" fade innerClass="rounded-5 shadow-4-strong"/>
  </template>
  <script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  
  export default {
    name: "FooterComp",
    components: {
      MDBCarousel
    },
    setup() {
      const items1 = [
        {
          src: "https://i.ibb.co/PhQK5Kt/carousel1.jpg",
          alt: "...",
          label: "",
          caption: ""
        },
        {
          src: "https://i.ibb.co/nQ66Y7K/carousel2.jpg",
          alt: "...",
          label: "",
          caption: ""
        },
        {
          src: "https://i.ibb.co/XLrk0Y5/carousel3.jpg",
          alt: "...",
          label: "",
          caption:
            ""
        }
      ];
      const carousel1 = ref(0);
      return {
        items1,
        carousel1
      };
    }
  };
  </script>
  
