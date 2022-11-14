<template>
  <br>
  <br>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-header" style="text-align: center;">
          <h2 style="color: #62ce5c;">Solicitud</h2>
        </div>
        <div class="card-body">
          <form class="row">
            <div class="col-3 offset-2">
              <button type="button" class="btn btn-primary" @click="actualizarStatus()">Ver Pedidos</button>
            </div>
            <div class="col-4 offset-2">
              <button type="button" class="btn btn-primary"  @click="consultarDatos()">Hacer un Pedido</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    mounted(){
    },
    methods:{
      consultarDatos(){
        this.$router.push('generar') 
      },
      actualizarStatus(){
        this.$router.push('logins') 
      }
    }
  }
</script>
