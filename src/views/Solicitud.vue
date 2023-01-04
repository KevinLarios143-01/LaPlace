<template>
  <!--Main layout-->
  <main class="my-5">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div v-if="control == 0">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c; font-family: monospace;">Reservaciones</h2>
            </div>
            <form class="row g-3">
              <div class="col-md-4 offset-2">
                <label for="remitente" style="font-weight:bold">Nombre de la persona</label>
                <input type="text" class="form-control" v-model="nombre" placeholder="Ingrese nombre de quien manda">
              </div>
              <div class="col-md-4">
                <label for="remitente" style="font-weight:bold">Teléfono</label>
                <input type="number" class="form-control" v-model="telefono"
                  placeholder="Ingrese nombre de quien manda">
              </div>
              <div class="col-md-3" style="margin-left: 155px">
                <label for="remitente" style="font-weight:bold">Fecha</label>
                <input type="date" class="form-control" v-model="fecha" placeholder="Ingrese nombre de quien manda">
              </div>
              <div class="col-md-3">
                <label for="remitente" style="font-weight:bold">Hora</label>
                <input type="time" class="form-control" v-model="hora" placeholder="Ingrese nombre de quien manda">
              </div>
              <div class="col-md-3">
                <label for="remitente" style="font-weight:bold">Cantidad de Personas</label>
                <input type="number" class="form-control" v-model="cantidad"
                  placeholder="Ingrese nombre de quien manda">
              </div>
              <div class="col-md-3" style="margin-left: 486px">
                <button type="button" class="btn btn-primary" @click="comida()">Seleccionar Comida</button>
              </div>
            </form>
          </div>
          <div v-else-if="control == 1">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c; font-family: monospace;">Seleccion de Comida</h2>
            </div>
            <div class="card-body">
              <form class="row g-3">
                <div class="col-md-3 offset-1" style="margin-left: 171px">
                  <label for="origen" style="font-weight:bold">Seleccione una Categoria:</label>
                  <br>
                  <select v-model="re" style="    
                        display: block;
                        width: 100%;
                        padding: 0.375rem 0.75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #212529;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #ced4da;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        border-radius: 0.375rem;
                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;">
                    <option disabled value="">Seleccione una Categoria</option>
                    <option v-for="a in aCategoria" :value='a.code'>
                      {{ a.label }}
                    </option>
                  </select>
                  <div class="row">
                    <div class="col-md-4 offset-4">
                      <button style="margin-top: 14px" type="button" class="btn btn-primary"
                        @click="cant()">Seleccionar</button>
                    </div>
                  </div>
                </div>
              </form>
              <br>
              <form class="row g-3">
                <div class="col-md-3 offset-2" style="margin-left: 169px;">
                  <label for="origen" style="font-weight:bold">Seleccione Platillo:</label>
                  <br>
                  <select v-model="platillo" style="    
                        display: block;
                        width: 100%;
                        padding: 0.375rem 0.75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #212529;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #ced4da;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        border-radius: 0.375rem;
                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;">
                    <option disabled value="">Seleccione una Comida</option>
                    <option v-for="a in aComida" :value='a.label'>
                      {{ a.label }}
                    </option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="origen" style="font-weight:bold">Seleccione Bebida:</label>
                  <br>
                  <select v-model="bebida" style="    
                        display: block;
                        width: 100%;
                        padding: 0.375rem 0.75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #212529;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #ced4da;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        border-radius: 0.375rem;
                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;">
                    <option disabled value="">Seleccione una Bebida</option>
                    <option v-for="a in aBebida" :value='a.label'>
                      {{ a.label }}
                    </option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="origen" style="font-weight:bold">Seleccione Postre:</label>
                  <br>
                  <select v-model="postre" style="    
                        display: block;
                        width: 100%;
                        padding: 0.375rem 0.75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #212529;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #ced4da;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        border-radius: 0.375rem;
                        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;">
                    <option disabled value="">Seleccione un Postre</option>
                    <option v-for="a in aPostre" :value='a.label'>
                      {{ a.label }}
                    </option>
                  </select>
                </div>
                <div class="col-md-8" style="margin-left: 229px">
                  <label for="direccion" style="font-weight:bold">Precio Total: {{ precio_total }}</label>
                  <br>
                </div>
                <div class="row">
                  <div class="col-md-4 offset-5">
                    <div class="row">
                      <div class="col-md-4" style="margin-left: 68px">
                        <button style="margin-top: 14px" type="button" class="btn btn-primary"
                          @click="ObtenerTotal()">Consultar</button>
                      </div>
                    </div>
                    <button v-if="precio_total != 0" style="margin-top: 14px< margin-left: -121px" type="button"
                      class="btn btn-primary" @click="GuardarReservacion()">Guardar Reservacion</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      nombre: "",
      telefono: 0,
      fecha: "",
      hora: "",
      cantidad: 0,
      control: 0,
      aCategoria: [],
      aComida: [],
      aBebida: [],
      aPostre: [],
      re: "",
      platillo: "",
      bebida: "",
      postre: "",
      precio_total: 0,
      totalb: 0,
      totalp: 0,
      totalc: 0,
      idb: 0,
      idc: 0,
      idp: 0,
      id_combo: 0
    }
  },
  mounted() {
    if (localStorage.getItem('vue3.isAuthenticated') != null) {
      this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
    }
    if (localStorage.getItem('vue3.isAdmin') != null) {
      this.$store.state.isAdmin = JSON.parse(localStorage.getItem('vue3.isAdmin'));
    }
    this.obtenerCategoria();
    this.obtenerBebida();
    this.obtenerPostre();
  },
  methods: {
    comida() {
      this.control = 1;
    },
    obtenerCategoria() {
      this.aCategoria = [];
      this.aCategoria.push({
        label: "Desayuno",
        code: "1"
      });
      this.aCategoria.push({
        label: "Almuerzo",
        code: "2"
      });
      this.aCategoria.push({
        label: "Cena",
        code: "3"
      });
      this.aCategoria.push({
        label: "Plato Fuerte",
        code: "5"
      });
    },
    cant() {
      this.obtenerComida();
    },
    obtenerComida() {
      let param = {
        categoria: this.re
      };
      axios({
        method: "get",
        url: "http://localhost:3000/comida/" + this.re,
        responseType: "json",
        data: param,
      }).then((response) => {
        this.aComida = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aComida.push({
              label: response.data.estatus[i].nombre,
              code: response.data.estatus[i].precio,
              id: response.data.estatus[i].id
            });
          }
        }
      });
    },
    obtenerBebida() {
      axios({
        method: "get",
        url: "http://localhost:3000/bebida",
        responseType: "json"
      }).then((response) => {
        this.aBebida = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aBebida.push({
              label: response.data.estatus[i].nombre,
              code: response.data.estatus[i].precio,
              id: response.data.estatus[i].id
            });
          }
        }
      });
    },
    obtenerPostre() {
      axios({
        method: "get",
        url: "http://localhost:3000/postre",
        responseType: "json"
      }).then((response) => {
        this.aPostre = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aPostre.push({
              label: response.data.estatus[i].nombre,
              code: response.data.estatus[i].precio,
              id: response.data.estatus[i].id
            });
          }
        }
      });
    },
    ObtenerTotal() {
      this.precio_total = 0;
      for (let i = 0; i < this.aComida.length; i++) {
        if (this.aComida[i].label == this.platillo) {
          this.total1 = this.aComida[i].code;
          this.idc = this.aComida[i].id
        }
      }
      for (let i = 0; i < this.aBebida.length; i++) {
        if (this.aBebida[i].label == this.bebida) {
          this.total2 = this.aBebida[i].code;
          this.idb = this.aBebida[i].id
        }
      }
      for (let i = 0; i < this.aPostre.length; i++) {
        if (this.aPostre[i].label == this.postre) {
          this.total3 = this.aPostre[i].code;
          this.idp = this.aPostre[i].id
        }
      }
      let param = {
        idb: this.idb,
        idc: this.idc,
        idp: this.idp
      };
      axios({
        method: "post",
        url: "http://localhost:3000/combo",
        responseType: "json",
        data: param,
      }).then((response) => {
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.id_combo = response.data.estatus[i].id_combo;
          }
        }
      });
      this.precio_total = (this.total1 + this.total2 + this.total3) * this.cantidad;
    },
    GuardarReservacion() {
      let param = {
        nombre: this.nombre,
        telefono: this.telefono,
        fecha: this.fecha,
        hora: this.hora,
        cantidad: this.cantidad,
        total: this.precio_total,
        id_combo: this.id_combo
      };
      axios({
        method: "post",
        url: "http://localhost:3000/solicitud",
        responseType: "json",
        data: param,
      }).then((response) => {
        if (response.status == 200) {
          this.$swal.fire({
            icon: 'succes',
            title: response.data.message,
          });
        }
      });
    }
  },
  setup() {

    return {

    };
  },
}

</script>
