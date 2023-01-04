<template>
    <!--Main layout-->
    <main class="my-5">
        <section class="text-center">
                <h2 class="mb-5"><strong>Mis pedidos</strong></h2>

        <!-- Modal -->
        <MDBModal size="lg" id="verdetalle" tabindex="-1" labelledby="verdetalleLabel" v-model="verdetalle" scrollable>
            <MDBModalHeader>
                <MDBModalTitle id="verdetalleLabel"> Detalle del pedido </MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>

                <div class="col-md-10 offset-1">
                    <table class="table table-bordered table-sm table-hover mb-0 table table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th style="text-align:center">Código Pedido</th>
                                <th style="text-align:center">Cantidad</th>
                                <th style="text-align:center">Menu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="adesPedidos.length > 0">
                                <tr v-for="(row, index) in adesPedidos" :key="`row-${index}`">
                                    <td style="text-align:center;" v-text="row.code"></td>
                                    <td style="text-align:center;" v-text="row.cantidad"></td>
                                    <td style="text-align:center;" v-text="row.menu"></td>
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
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" @click="verdetalle = !verdetalle"> Cerrar </MDBBtn>

            </MDBModalFooter>
        </MDBModal>
        <div class="col-md-10 offset-1">
            <table class="table table-bordered table-sm table-hover mb-0 table table-striped">
                <thead class="table-dark">
                    <tr>
                        <th style="text-align:center">Código Pedido</th>
                        <th style="text-align:center">Total</th>
                        <th style="text-align:center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="aPedidos.length > 0">
                        <tr v-for="(row, index) in aPedidos" :key="`row-${index}`">
                            <td style="text-align:center;" v-text="row.label"></td>
                            <td style="text-align:center;" v-text="row.total.toFixed(2)"></td>
                            <td style="text-align:center;"> <button class="btn-info"
                                    @click="verdetalles(row.label), verdetalle = true">Ver
                                    Detalles</button> </td>
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
        </section>
    </main>
</template>
<script>
import axios from 'axios';
import {
    MDBSpinner,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardImg,
    MDBBadge
} from "mdb-vue-ui-kit";
import { ref } from 'vue';

export default {
    name: "Pedidos",
    components: {
        MDBSpinner,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
        MDBBtn,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardFooter,
        MDBCardImg,
        MDBBadge,
    },
    setup() {
        const verdetalle = ref(false);

        return {
            verdetalle,
        };
    },
    data() {
        return {
            id_categoria: "",
            nombre: "",
            usuario: "",
            precio: "",
            aPedidos: [],
            adesPedidos: [],
        }
    },
    mounted() {
        if (localStorage.getItem('vue3.isAuthenticated') != null) {
            this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
        }

        if (localStorage.getItem('vue3.isAdmin') != null) {
            this.$store.state.isAdmin = JSON.parse(localStorage.getItem('vue3.isAdmin'));
        }
        this.usuario = this.$store.state.user;
        this.obtenerPedidos(this.usuario);
    },
    methods: {
        obtenerPedidos(user) {
            axios({
                method: "get",
                url: "http://localhost:3000/pedidos/" + user,
                responseType: "json"
            }).then((response) => {
                this.aPedidos = [];
                if (response.status == 200) {
                    for (let i = 0; i < response.data.estatus.length; i++) {
                        this.aPedidos.push({
                            label: response.data.estatus[i].id,
                            code: response.data.estatus[i].usuario,
                            total: response.data.estatus[i].total
                        });
                    }
                }
            });
        },
        verdetalles(id) {
            axios({
                method: "get",
                url: "http://localhost:3000/detallepedidos/" + id,
                responseType: "json"
            }).then((response) => {
                this.adesPedidos = [];
                if (response.status == 200) {
                    for (let i = 0; i < response.data.estatus.length; i++) {
                        this.adesPedidos.push({
                            label: response.data.estatus[i].id,
                            code: response.data.estatus[i].id_pedido,
                            cantidad: response.data.estatus[i].cantidad,
                            menu: response.data.estatus[i].nombre,
                        });
                    }
                }
            });
        }
    },
} 
</script>

<style>
.table-striped tbody tr:nth-of-type(odd) {
    background-color: #d9edf7 !important;
}

.table-hover tbody tr:hover {
    background-color: #f7f7f7 !important;
}
</style>