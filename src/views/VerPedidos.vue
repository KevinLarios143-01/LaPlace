<template>
  <br>
  <br>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c;">Pedidos</h2>
            </div>
            <div class="card-body">
              <div class="col-md-10 offset-1">
                <table class="table table-bordered table-sm table-hover mb-0 table table-striped">
                  <thead class="table-dark">
                    <tr>
                      <th style="text-align:center">Número de Solicitud</th>
                      <th style="text-align:center">Remitente</th>
                      <th style="text-align:center">Destinatario</th>
                      <th style="text-align:center">Estado</th>
                      <th style="text-align:center">Categoría</th>
                      <th style="text-align:center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="aCategoria.length > 0">
                      <tr v-for="(row, index) in aCategoria" :key="`row-${index}`">
                        <td style="text-align:center;" v-text="row.num"></td>
                        <td style="text-align:center;" v-text="row.remitente"></td>
                        <td style="text-align:center;" v-text="row.destinatario"></td>
                        <td style="text-align:center;" v-text="row.estado"></td>
                        <td style="text-align:center;" v-text="row.categoria"></td>
                        <td style="text-align:center;" v-text="row.total"></td>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        num: "",
        remitente: "",
        destinatario: "",
        estado: "",
        categoria: "",
        total: "",
        aCategoria: []
      } 
    },
    mounted(){
      this.obtenerCategorias();
    },
    methods:{
      obtenerCategorias(){
        axios({
          method: "get",
          url: "https://forzag.herokuapp.com/solicitudes",
          responseType: "json"
        }).then((response) => {
          this.aCategoria = [];
          if (response.status == 200) {
            for (let i = 0; i < response.data.estatus.length; i++) {
              this.aCategoria.push({
                num: response.data.estatus[i].no_solicitud,
                remitente: response.data.estatus[i].remitente,
                destinatario: response.data.estatus[i].destinatario,
                estado: response.data.estatus[i].estado,
                categoria: response.data.estatus[i].categoria,
                total: response.data.estatus[i].total,
                
              });
            }
          }
        });
      },
    },  
  } 
</script>

<style>
  .table-striped tbody tr:nth-of-type(odd){
    background-color: #d9edf7 !important;
  }
  .table-hover tbody tr:hover {
    background-color: #f7f7f7 !important;
  }
</style>