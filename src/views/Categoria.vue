<template>
  <br>
  <br>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header" style="text-align: center;">
              <h2 style="color: #62ce5c; font-family: monospace;">Categorías</h2>
            </div>
            <div class="card-body">
              <form class="row g-3">
                <form class="row g-3; was-validated">
                  <div class="col-md-5 offset-1">
                    <label for="codigo" style="font-weight:bold">Código Categoría:</label>
                    <input type="text" class="form-control" v-model="id_categoria" placeholder="Ingrese código de categoría" required>
                  </div>
                  <div class="col-md-5">
                    <label for="nombre" style="font-weight:bold">Nombre:</label>
                    <input type="text" class="form-control" v-model="nombre" placeholder="Ingrese Categoría" required>
                  </div>
                </form>
                <div class="col-md-4 offset-4">
                  <button type="button" class="btn btn-primary" align="center" @click="crear()">Guardar Categoría</button>
                </div>
              </form>
              <br>
              <div class="col-md-10 offset-1">
                <table class="table table-bordered table-sm table-hover mb-0 table table-striped">
                  <thead class="table-dark">
                    <tr>
                      <th style="text-align:center">Código Categoria</th>
                      <th style="text-align:center">Nombre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="aCategoria.length > 0">
                      <tr v-for="(row, index) in aCategoria" :key="`row-${index}`">
                        <td style="text-align:center;" v-text="row.label"></td>
                        <td style="text-align:center;" v-text="row.code"></td>
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
        id_categoria: "",
        nombre: "",
        aCategoria: []
      } 
    },
    mounted(){
      if (localStorage.getItem('vue3.isAuthenticated') != null) {
            this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
        }
        if (localStorage.getItem('vue3.isAdmin') != null) {
            this.$store.state.isAdmin = JSON.parse(localStorage.getItem('vue3.isAdmin'));
        }
      this.obtenerCategorias();
    },
    methods:{
      crear() {
        if((this.id_categoria == "") || (this.nombre == "")){
           this.$swal.fire({ icon: 'error',
              title: 'NO PUEDE DEJAR CAMPOS EN BLANCO',
            });
        }else{
          let param = {
            id: this.id_categoria,
            nombre: this.nombre
          };
          axios({
            method: "post",
            url: "http://localhost:3000/categorias",
            responseType: "json",
            data: param,
          }).then((response) => {
            if (response.status == 200) {
              this.$swal.fire({ icon: 'succes',
                title: 'CATEGORIA AGREGADA CON ÉXITO',
              });
            }else{
              this.$swal.fire({ icon: 'error',
                title: 'ERROR AL INSERTAR CATEGORIA',
              });
            }
          });
        }
      },
      obtenerCategorias(){
        axios({
          method: "get",
          url: "http://localhost:3000/categorias",
          responseType: "json"
        }).then((response) => {
          this.aCategoria = [];
          if (response.status == 200) {
            for (let i = 0; i < response.data.categorias.length; i++) {
              this.aCategoria.push({
                label: response.data.categorias[i].id,
                code: response.data.categorias[i].nombre
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