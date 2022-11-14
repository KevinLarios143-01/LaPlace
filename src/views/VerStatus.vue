<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c;">Ver Detalles del Pedido</h2>
            </div>
            <div class="card-body">
              <div class="row">
                <form class="row g-3; was-validated">
                  <div class="col-md-4 offset-2">
                    <label for="solicitud" style="font-weight:bold">No. Solicitud:</label>
                    <input type="number" v-model="orden" class="form-control" required>
                    <br>
                  </div>
                  <div class="col-md-4">
                    <label for="solicitud" style="font-weight:bold">Remitente:</label>
                    <input type="text" v-model="remitente" class="form-control" disabled>
                    <br>
                  </div>
                  <div class="col-md-4 offset-2">
                    <label for="solicitud" style="font-weight:bold">Destinatario:</label>
                    <input type="text" v-model="destinatario" class="form-control" disabled>
                    <br>
                  </div>
                  <div class="col-md-4">
                    <label for="solicitud" style="font-weight:bold">Total del Pedido:</label>
                    <input type="text" v-model="precio" class="form-control" disabled>
                    <br>
                  </div>
                </form>
              </div>
              <div class="col-md-4 offset-4">
                <button type="button" class="btn btn-primary" @click="ver()">Visualizar Estado</button>
              </div>
              <br>
              <div class="col-md-4 offset-4">
                <div v-if="ejemplo == 1">
                  <label for="solicitud" style="font-weight:bold; text-align:center; font-size: 26px; font-family: system-ui;">ORDEN NUEVA</label>
                </div>
                <div v-if="ejemplo == 2">
                  <label for="solicitud" style="font-weight:bold; text-align:center, font-size: 26px; font-family: system-ui;">SURTIÉNDOSE</label>
                </div>
                <div v-if="ejemplo == 3">
                  <label for="solicitud" style="font-weight:bold; text-align:center; font-size: 26px; font-family: system-ui;">EMPACÁNDOSE</label>
                </div>
                <div v-if="ejemplo == 4">
                 <label for="solicitud" style="font-weight:bold; text-align:center; font-size: 26px; font-family: system-ui;">EN RUTA</label>
                </div>
                <div v-if="ejemplo == 5">
                  <label for="solicitud" style="font-weight:bold; text-align:center; font-size: 26px; font-family: system-ui;">ENTREGADA</label>
                </div>
              </div>

              <div class="col-md-10 offset-1">
                <div class="progress" v-if="ejemplo == 1">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" aria-label="Default striped example" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" v-if="ejemplo == 2">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-success" role="progressbar" aria-label="Success striped example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" v-if="ejemplo == 3">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-info" role="progressbar" aria-label="Info striped example" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" v-if="ejemplo == 4">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-warning" role="progressbar" aria-label="Warning striped example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" v-if="ejemplo == 5">
                  <div class="progress-bar progress-bar-striped  progress-bar-animated bg-danger" role="progressbar" aria-label="Danger striped example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
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
      ejemplo: 0,
      remitente: "",
      destinatario: "",
      orden: "",
      precio: ""
    }
  },
  methods:{
    ver(){
      if((this.orden == "")){
        this.$swal.fire({ icon: 'error',
          title: 'DEBE INGRESAR NÚMERO DE SOLICITUD',
        });
      }else{
        console.log(this.orden);
        let param = {
          orden: this.orden
        };
        axios({
          method: "get",
          url: "https://forzag.herokuapp.com/solicitud/" + this.orden,
          responseType: "json",
          data: param
        }).then((response) => {
          if (response.status == 200) {
            this.ejemplo = response.data.estatus[0].estado;
            this.destinatario = response.data.estatus[0].destinatario;
            this.remitente = response.data.estatus[0].remitente;
            this.precio = response.data.estatus[0].total;
          }
        });
      }
      this.destinatario = "";
      this.remitente = "";
      this.total = "";
    }
  }
}
</script>
