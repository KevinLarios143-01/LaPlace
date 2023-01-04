<template>
  <!--Main layout-->
  <main class="mt-5">
    <div class="container">
      <!--Section: Content-->
      <section>
        <div class="card-group">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="../assets/menus.png" style="width: 150px; height: 150px; align-self: center"
                class="card-img-top" alt="Hollywood Sign on The Hill" />
              <a href="/menu">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Menu</h5>
            </div>
          </div>
          <div class="card" v-if="this.$store.state.isAuthenticated">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="../assets/pedidos.png" style="width: 150px; height: 150px; align-self: center"
                class="card-img-top" alt="Palm Springs Road" />
              <a href="/pedidos">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>

            <div class="card-body">
              <h5 class="card-title">Pedidos</h5>
            </div>
          </div>
          <div class="card" v-else>
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="../assets/pedidos.png" style="width: 150px; height: 150px; align-self: center"
                class="card-img-top" alt="Palm Springs Road" />
              <a href="/logins">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>

            <div class="card-body">
              <h5 class="card-title">Pedidos</h5>
            </div>
          </div>
          <div class="card" v-if="this.$store.state.isAuthenticated">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="../assets/reserva.png" style="width: 150px; height: 150px; align-self: center"
                class="card-img-top" alt="Los Angeles Skyscrapers" />
              <a href="/departamentos">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Reservaciones</h5>
            </div>
          </div>
          <div class="card" v-else>
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="../assets/reserva.png" style="width: 150px; height: 150px; align-self: center"
                class="card-img-top" alt="Los Angeles Skyscrapers" />
              <a href="/logins">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Reservaciones</h5>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->
      <hr class="my-5" />
      <!--Section: Content-->
      <section>
        <div class="row">
          <div class="col-md-6 gx-5 mb-4">
            <div class="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
              <img src="../assets/postwork.jpg" class="img-fluid" />

              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4" style="text-align: justify">
            <br />
            <h4><strong>Brindandote el mejor servicio siempre</strong></h4>
            <p class="text-muted">
              Vive la mejor época del año con la mejor comida, no puedes dejar
              pasar la oportunidad de probar nuestros platillos de temporada.
            </p>
            <p><strong>Te gustan las fiestas de fin de año?</strong></p>
            <p class="text-muted">
              En <b>La Place</b> nos empeñamos en darte a ti lo que te mereces
              para compartir con tu familia y amigos.
            </p>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <hr class="my-5" />

      <!--Section: Content-->
      <section class="text-center">
        <h3 class="mb-5"><strong>La Navidad en La Place</strong></h3>

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../assets/navidad1.jpg" class="img-fluid" />
                <a href="/menu">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
              </div>
              <div class="card-body" v-if="this.$store.state.isAuthenticated">
                <a href="/menu" class="btn btn-primary">Comprar</a>
              </div>
              <div class="card-body" v-else>
                <a href="/logins" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../assets/navidad2.jpg" class="img-fluid" />
                <a href="/menu">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
              </div>
              <div class="card-body" v-if="this.$store.state.isAuthenticated">
                <a href="/menu" class="btn btn-primary">Comprar</a>
              </div>
              <div class="card-body" v-else>
                <a href="/logins" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../assets/navidad3.jpg" class="img-fluid" />
                <a href="/menu">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
              </div>
              <div class="card-body" v-if="this.$store.state.isAuthenticated">
                <a href="/menu" class="btn btn-primary">Comprar</a>
              </div>
              <div class="card-body" v-else>
                <a href="/logins" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <hr class="my-5" />
      <!--Section: Content-->
      <section class="text-center">
        <h3 class="mb-5"><strong>La Place Tan Nuestro</strong></h3>

        <div class="row">
          <div class="col-lg-6 col-md-12 mb-6">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../assets/navidad4.jpg" class="img-fluid" />
                <a href="/menu">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
              </div>
              <div class="card-body" v-if="this.$store.state.isAuthenticated">
                <a href="/menu" class="btn btn-primary">Comprar</a>
              </div>
              <div class="card-body" v-else>
                <a href="/logins" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 mb-6">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../assets/navidad5.jpg" class="img-fluid" />
                <a href="/menu">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                </a>
              </div>
              <div class="card-body" v-if="this.$store.state.isAuthenticated">
                <a href="/menu" class="btn btn-primary">Comprar</a>
              </div>
              <div class="card-body" v-else>
                <a href="/logins" class="btn btn-primary">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <hr class="my-5" />
      <!--Section: Content-->
      <section class="mb-5">
        <h3 class="mb-5 text-center"><strong>Contacto</strong></h3>

        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <form class="row g-3 was-validated">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row mb-4">
                <div class="col">
                  <div class="mb-3">
                    <label class="form-label" for="form3Example1">Nombres*</label>
                    <input type="text" id="form3Example1" v-model="nombres" class="form-control" required />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label class="form-label" for="form3Example2">Apellidos*</label>
                    <input type="text" id="form3Example2" v-model="apellidos" class="form-control" required />
                  </div>
                </div>
              </div>
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row mb-4">
                <div class="col">
                  <!-- Email input -->
                  <div class="mb-3">
                    <label class="form-label" for="form3Example3">Correo Electrónico*</label>
                    <input type="email" id="form3Example3" v-model="email" class="form-control" required />
                  </div>
                </div>
                <div class="col">
                  <!-- cellphone input -->
                  <div class="mb-3">
                    <label class="form-label" for="form3Example2">Teléfono</label>
                    <input type="number" id="form3Example2" v-model="telefono" class="form-control" />
                  </div>
                </div>
              </div>

              <!-- Message input -->
              <div class="mb-3">
                <label class="form-label" for="form4Example3">Mensaje*</label>
                <textarea class="form-control" id="form4Example3" v-model="mensaje" rows="4" required></textarea>
              </div>

              <!-- Submit button -->
              <button type="button" @click="guardarcontacto()" class="btn btn-primary btn-block mb-4">
                Enviar
              </button>
              <!-- Submit button -->

              (*) Campos requeridos.
            </form>
          </div>
        </div>
      </section>
      <!--Section: Content-->
    </div>
  </main>
  <!--Main layout-->
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      nombres: "",
      apellidos: "",
      email: "",
      telefono: 0,
      mensaje: "",
      aCategoria: []
    }
  },
  mounted() {
    this.obtenerCategorias();
    if (localStorage.getItem('vue3.isAuthenticated') != null) {
      this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
    }
    if (localStorage.getItem('vue3.isAdmin') != null) {
      this.$store.state.isAdmin = JSON.parse(localStorage.getItem('vue3.isAdmin'));
    }
  },
  methods: {
    guardarcontacto() {
      if ((this.nombres == "") || (this.apellidos == "") || (this.email == "") || (this.telefono == "") || (this.mensaje == "")) {
        this.$swal.fire({
          icon: 'error',
          title: 'NO PUEDE DEJAR CAMPOS EN BLANCO',
        });
      } else {
        let param = {
          nombres: this.nombres,
          apellidos: this.apellidos,
          email: this.email,
          telefono: this.telefono,
          mensaje: this.mensaje,
        };
        axios({
          method: "post",
          url: "http://localhost:3000/contactos",
          responseType: "json",
          data: param,
        }).then((response) => {
          if (response.status == 200) {
            this.$swal.fire({
              icon: 'succes',
              title: 'ENVIADO CON ÉXITO',
            });
            this.$router.push("/");
          } else {
            this.$swal.fire({
              icon: 'error',
              title: 'ERROR AL ENVIAR',
            });
          }
        });
      }
    },
    obtenerCategorias() {
      axios({
        method: "get",
        url: "https://forzag.herokuapp.com/categorias",
        responseType: "json"
      }).then((response) => {
        this.aCategoria = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.categorias.length; i++) {
            this.aCategoria.push({
              label: response.data.categorias[i].id_categoria,
              code: response.data.categorias[i].nombre,
              precio: response.data.categorias[i].precio
            });
          }
        }
      });
    },
  },
} 
</script>

