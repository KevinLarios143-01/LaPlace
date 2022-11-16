<template>
  <div class="container">
    <!--Main layout-->
    <main class="my-5">
      <MDBCard border="success" shadow="0" bg="white" class="mb-3">
        <MDBCardHeader bg="transparent" border="success">
          <h2>Productos seleccionados</h2>
        </MDBCardHeader>
        <MDBCardBody style="align-self: center;">
          <CarritoComp v-for="product in items" :key="product.id" :product="product"/>
          <CarritoSuma />
        </MDBCardBody>
        <MDBCardFooter bg="transparent" border="success">
          <h5>La Place</h5>
        </MDBCardFooter>
      </MDBCard>
    </main>
    <!--Main layout-->
  </div>

</template>

<script>
import CarritoComp from '@/components/CarritoComp.vue';
import CarritoSuma from '@/components/CarritoSuma.vue';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBRow, MDBCol, MDBCardImg } from "mdb-vue-ui-kit";
export default {
  components: {
    CarritoComp,
    CarritoSuma,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBRow, 
    MDBCol,
    MDBCardImg
  },

  data() {
    return {

    }
  },
  mounted() {
    if (localStorage.getItem('vue3.isAuthenticated') != null) {
      this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
    }

  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    itemcost(){
      return this.pro
    },
  },
  methods: {

  }
}
</script>