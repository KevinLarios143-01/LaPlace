<template>
  <!--Main layout-->
  <main class="my-5">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
          Reservaciones
        </div>
        <div class="card-body">
          <form class="row g-3">
            <div class="col-md-4 offset-2">
              <label for="remitente" style="font-weight:bold">Nombre de la persona</label>
              <input type="text" class="form-control" v-model="nombre" placeholder="Ingrese nombre de quien manda">
            </div>
            <div class="col-md-4">
              <label for="remitente" style="font-weight:bold">Teléfono</label>
              <input type="number" class="form-control" v-model="telefono" placeholder="Ingrese nombre de quien manda">
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
              <input type="number" class="form-control" v-model="cantidad" placeholder="Ingrese nombre de quien manda">
            </div>
            <div class="col-md-3" style="margin-left: 556px">
              <button type="button" class="btn btn-primary" @click="comida()">Seleccionar Comida</button>
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
  name: 'HomeView',
  data() {
    return {
      nombre: "",
      telefono: 0,
      fecha: "",
      hora: "",
      cantidad: 0,
    }
  },
  mounted() {
  },
  methods: {
    comida() {
      let param = {
        nombre: this.nombre,
        telefono: this.telefono,
        fecha: this.fecha,
        hora: this.hora,
        cantidad: this.cantidad
      };
      axios({
        method: "post",
        url: "http://localhost:3000/solicitud",
        responseType: "json",
        data: param,
      }).then((response) => {
        if (response.status == 200) {
          console.log(response.data);
        }
      });
      this.$router.push('categoria')
    },
  },
  setup() {

    return {

    };
  },
}

</script>
