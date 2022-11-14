<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">Navbar w/ text</MDBNavbarBrand>
    <MDBNavbarToggler target="#navbarText"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarText">
      <MDBNavbarItem href="#"> Home </MDBNavbarItem>
      <MDBNavbarItem href="#"> Features </MDBNavbarItem>
      <MDBNavbarItem href="#"> Pricing </MDBNavbarItem>
      <template v-slot:contentRight>
        <span class="navbar-text"> Navbar text with an inline element </span>
      </template>
    </MDBNavbarNav>
  </MDBNavbar>
</template>
<script>
  import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
  } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBNavbar,
      MDBNavbarBrand,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem,
    },
  };
</script>