<template>
  <!--Main layout-->
  <main class="my-5">
    <div v-if="loading">
      <MDBSpinner grow color="info" />
    </div>
    <div v-else class="container">
      <!--Section: Content-->

      <!-- Modal -->
      <MDBModal id="vercarrito" tabindex="-1" labelledby="vercarritoLabel" v-model="vercarrito" scrollable>
        <MDBModalHeader>
          <MDBModalTitle id="vercarritoLabel"> Pedido </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
          <MDBCard v-if="mens != null" class="h-100">
            <MDBCardImg src="https://i.ibb.co/zRNhVCx/comidas.webp" top alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{{ mens.name }}</MDBCardTitle>
            </MDBCardBody>
            <MDBCardFooter>
              Q{{ mens.price.toFixed(2) }}
            </MDBCardFooter>
          </MDBCard>
          <MDBCard v-else class="h-100">
            <MDBCardBody>
              <MDBCardTitle>Ningún menú seleccionado</MDBCardTitle>
            </MDBCardBody>
          </MDBCard><br>
          <MDBBtn color="primary" size="lg">
            Cantidad<MDBBadge color="danger" class="ms-2">{{ productotal }}</MDBBadge>
          </MDBBtn>

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" @click="removeFromCart()"> Remover - </MDBBtn>
          <MDBBtn v-if="mens != null" color="success" @click="addToCart()"> Agregar + </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <!--Esto es el modal-->
      <section class="text-center">
        <h2 class="mb-5"><strong>Platillos</strong></h2>
        <div class="row">
          <div class="col-8 mb-3">
            <label for="disabledSelect" class="form-label">Desayunos / Almuerzos / Cenas</label>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="categoriaId">
              <option :value="null">Seleccione una categoría</option>
              <option v-for="cat in aCategoriasc" :value="cat.idc" :key="cat.idc">{{ cat.nombrec }}</option>
            </select>
          </div>
          <div class="col-1"></div>
          <div class="col-3 mb-3">
            <label class="form-label">&nbsp;</label>
            <MDBBtn class="form-control" color="primary" size="lg" @click="vercarrito = true">
              <i class="fa fa-shopping-cart"></i> Carrito de Compras
            </MDBBtn>
          </div>

        </div>


        <br><br>
        <div class="row">
          <div v-for="menu in catalog" :key="menu.id" class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://i.ibb.co/s6bFNk9/comida.webp" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ menu.name }}</h5>
                <p class="card-text">
                  Q{{ menu.price.toFixed(2) }}
                </p>
                <button v-if="$store.state.isAuthenticated" @click="viewMenu(menu), vercarrito = true"
                  class="btn btn-primary">
                  <i class="fa fa-shopping-cart"></i>
                  Generar compra
                </button>

                <button v-else @click="$router.push('/logins')" class="btn btn-primary">
                  <i class="fa fa-shopping-cart"></i>
                  Generar compra
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <!--Section: Content-->

      <!-- Pagination -->
      <nav class="my-4" aria-label="...">
        <ul class="pagination pagination-circle justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
  <!--Main layout-->
</template>
<style>

</style>
<script>

import axios from 'axios';
import {
  MDBSpinner,
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardImg,
  MDBBadge
} from "mdb-vue-ui-kit";
import { ref } from 'vue';
export default {
  name: "catalog",
  components: {
    MDBSpinner,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardImg,
    MDBBadge,
  },
  setup() {
    const vercarrito = ref(false);

    return {
      vercarrito,
    };
  },
  data() {
    return {
      aCategoriasc: [],
      aMenus: [],
      categoriaId: null,
      loading: false,
      order: {
        quantity: null
      },
      mens: null,
      menusAgregados: [],
    }
  },
  mounted() {
    this.obtenerCategorias();
    this.obtenerMenus();
    if (localStorage.getItem('vue3.isAuthenticated') != null) {
      this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
    }
    if (localStorage.getItem('vue3.isAdmin') != null) {
      this.$store.state.isAdmin = JSON.parse(localStorage.getItem('vue3.isAdmin'));
    }
  },


  computed: {
    catalog() {
      if (this.categoriaId === null) return [];
      let categoria = this.aCategoriasc.find(x => x.idc == this.categoriaId);
      let xs = this.aMenus.filter(x => x.cat == categoria.idc);
      return xs;
    },
    productotal() {
      return this.$store.getters.productQuantity(this.mens);
    }
  },

  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.mens);
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.mens);
    },
    obtenerMenus() {
      axios({
        method: "get",
        url: "http://localhost:3000/menus",
        responseType: "json"
      }).then((response) => {
        this.aMenus = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aMenus.push({
              id: response.data.estatus[i].id,
              name: response.data.estatus[i].nombre,
              price: response.data.estatus[i].precio,
              cat: response.data.estatus[i].categoria
            });

          }

        }
      }).catch((response) => {
        console.log(response)
      });
    },

    obtenerCategorias() {
      axios({
        method: "get",
        url: "http://localhost:3000/categoriascomida",
        responseType: "json"
      }).then((response) => {
        this.aCategoriasc = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aCategoriasc.push({
              idc: response.data.estatus[i].id,
              nombrec: response.data.estatus[i].nombre
            });
          }
        }
      }).catch((response) => {
        console.log(response);
      });
    },
    viewMenu(menu) {
      this.mens = menu;
    },
    confirmenu(menu) {
      this.vercarrito = false;
      this.menusAgregados.push(menu);
      this.mens = null;
      //console.log(this.menusAgregados);
    }
  },
}

</script>
