<template>
  <!--Main layout-->
  <main class="my-5">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align:center ;">
          Reservaciones
        </div>
        <div class="card-body">
          <br>
          <table class="table table-bordered table-striped table-sm">
            <thead>
              <tr>
                <th style="text-align:center">Fecha</th>
                <th style="text-align:center">Hora</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="aDepartamentos.length > 0">
                <tr v-for="(row, index) in aDepartamentos" :key="`row-${index}`">
                  <td style="text-align:center;" v-text="row.code"></td>
                  <td style="text-align:center;" v-text="row.label"></td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="10">No hay filas para mostrar.</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      nombre: "",
      cod_postal: "",
      aDepartamentos: [],
    }
  },
  mounted() {
    this.obtenerDepartamentos();
  },
  methods: {
    obtenerDepartamentos() {
      axios({
        method: "get",
        url: "http://localhost:3000/horarios",
        responseType: "json"
      }).then((response) => {
        this.aDepartamentos = [];
        if (response.status == 200) {
          for (let i = 0; i < response.data.estatus.length; i++) {
            this.aDepartamentos.push({
              label: response.data.estatus[i].fecha,
              code: response.data.estatus[i].hora
            });
          }
        }
      });
    },
  },
}
</script>
