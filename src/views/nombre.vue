<template>
  <div>
    <br>
    <br>
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c;">Ingresar</h2>
            </div>
            <div class="card-body">
              <form v-if="si == 0" class="row g-3">
                <div class="col-md-5 offset-1">
                  <label for="usuario" style="font-weight:bold">Nombre:</label>
                  <input type="text" v-model="usua" class="form-control">
                </div>
                <div class="col-md-4 offset-4">
                  <button type="button" class="btn btn-primary" @click="login()">Ver</button>
                </div>
              </form>
              <form v-else>
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
                      <template v-if="aPedido.length > 0">
                        <tr v-for="(row, index) in aPedido" :key="`row-${index}`">
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
                  <br>
                  <div class="col-md-4 offset-4">
                  <button type="button" class="btn btn-primary" @click="login2()">Buscar otro pedido</button>
                </div>
                </div>
              </form>
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
        usuario: "",
        password: "",
        usua: "",
        pass: "",
        mensaje: "",
        res : "",
        id: "",
        aPedido: [],
        si: 0
      } 
    },
    mounted(){
    },
    methods:{ 
      obtenerLogin(){
        axios({
          method: "get",
          url: "https://forzag.herokuapp.com/solicitu/" + this.usua,
          responseType: "json"
        }).then((response) => {
          if(response.status == 200) {
            if((response.data.id == "") || (response.data.id == null) || (response.data.id == undefined)){
              this.$swal.fire({ icon: 'error',
                title: 'NOMBRE NO ENCONTRADO',
              });
            }else{
              this.$swal.fire({ icon: 'success',
                title: 'NOMBRE ENCONTRADO',
              });
              this.id = response.data.id[0].id_remitente;
              //this.$router.push('detalles') 
              this.si = 1;
              this.obtenerDatos();
            }
          }
        });
      },
      login(){
        this.obtenerLogin();
      }, 
      obtenerDatos(){
        axios({
          method: "get",
          url: "https://forzag.herokuapp.com/solicitudd/" + this.usua,
          responseType: "json"
        }).then((response) => {
          this.aPedido = [];
          if (response.status == 200) {
            for (let i = 0; i < response.data.estatus.length; i++) {
              this.aPedido.push({
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
      login2(){
        this.si = 0;
        this.usua = "";
      }, 
    }
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