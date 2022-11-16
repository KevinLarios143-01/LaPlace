<template>
  <!--Main layout-->
  <main class="my-5">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
          Seleccion de comida
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
                <option v-for="a in aCategoria" v-bind:key="a.label">
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
                <option v-for="a in aComida" v-bind:key="a.label">
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
                <option v-for="a in aComida" v-bind:key="a.label">
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
                <option disabled value="">Seleccione una Postre</option>
                <option v-for="a in aComida" v-bind:key="a.label">
                  {{ a.label }}
                </option>
              </select>
            </div>
            <div class="col-md-8 offset-5">
              <label for="direccion" style="font-weight:bold">Precio Total: {{ precio_total }}</label>
              <br>
            </div>
            <div class="row">
              <div class="col-md-4 offset-5">
                <button v-if="precio_total != 0" style="margin-top: 14px" type="button" class="btn btn-primary"
                  @click="GuardarReservacion()">Guardar Reservacion</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Reservaciones',

  data() {
    return {
      aCategoria: [],
      aComida: [],
      aBebida: [],
      aPostre: [],
      re: "",
      platillo: "",
      bebida: "",
      postre: "",
      precio_total: 0,
      total1: 1,
      total2: 0,
      total3: 0,
      nombre: ""
    }
  },
  mounted() {
    this.obtenerCategoria();
    this.cant();
    this.ObtenerTotal();
  },
  methods: {
    obtenerCategoria() {
      this.aCategoria = [];
      this.aCategoria.push({
        label: "Desayuno",
        code: "1"
      });
      this.aCategoria.push({
        label: "Plato Fuerte",
        code: "2"
      });
    },
    cant() {
      this.obtenerComida();
      this.obtenerBebida();
      this.obtenerPostre();
    },
    obtenerComida() {
      let param = {
        id_comida: this.re
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
              label: response.data.estatus[i].platillo
            });
            this.total1 = response.data.estatus[i].precio;
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
              label: response.data.estatus[i].platillo
            });
            this.total2 = response.data.estatus[i].precio;
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
        this.aBebida = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aBebida.push({
              label: response.data.estatus[i].platillo
            });
            this.total3 = response.data.estatus[i].precio;
          }
        }
      });
    },
    ObtenerTotal() {
      this.precio_total += this.total1 + this.total2 + this.total3;
    },
    GuardarReservacion() {
      let param = {
        id_comida: this.re
      };
      axios({
        method: "get",
        url: "http://localhost:3000/comida/" + this.platillo + this.nombre,
        responseType: "json",
        data: param,
      }).then((response) => {
        this.aComida = [];
        if (response.status == 200) {
          console.log("");
        }
      });
      axios({
        method: "get",
        url: "http://localhost:3000/total/" + this.precio_total + this.nombre,
        responseType: "json",
        data: param,
      }).then((response) => {
        this.aComida = [];
        if (response.status == 200) {
          console.log("");
        }
      });
    }
  },
}
</script>

