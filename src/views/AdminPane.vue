<template>
    <main class="my-5">
        <div class="container">
            <div class="row d-flex justify-content-center">

                <MDBTabs v-model="form7ActiveTab">
                    <!-- Tabs navs -->
                    <MDBTabNav pills justify tabsClasses="mb-3">
                        <MDBTabItem tabId="contactos" href="contactos">
                            Contactos
                        </MDBTabItem>
                        <MDBTabItem tabId="pedidos" href="pedidos">
                            Pedido
                        </MDBTabItem>
                    </MDBTabNav>
                    <!-- Tabs navs -->
                    <!-- Tabs content -->
                    <MDBTabContent>
                        <MDBTabPane tabId="intro">

                        </MDBTabPane>
                        <MDBTabPane tabId="pedidos">
                            <!--Main layout-->
                            <main class="my-5">
                                <section class="text-center">
                                    <h2 class="mb-5"><strong>Pedidos</strong></h2>

                                    <!-- Modal -->
                                    <MDBModal size="lg" id="verdetalle" tabindex="-1" labelledby="verdetalleLabel"
                                        v-model="verdetalle" scrollable>
                                        <MDBModalHeader>
                                            <MDBModalTitle id="verdetalleLabel"> Detalle del pedido </MDBModalTitle>
                                        </MDBModalHeader>
                                        <MDBModalBody>

                                            <div class="col-md-10 offset-1">
                                                <table
                                                    class="table table-bordered table-sm table-hover mb-0 table table-striped">
                                                    <thead class="table-dark">
                                                        <tr>
                                                            <th style="text-align:center">Código Pedido</th>
                                                            <th style="text-align:center">Cantidad</th>
                                                            <th style="text-align:center">Menu</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <template v-if="adesPedidos.length > 0">
                                                            <tr v-for="(row, index) in adesPedidos"
                                                                :key="`row-${index}`">
                                                                <td style="text-align:center;" v-text="row.code"></td>
                                                                <td style="text-align:center;" v-text="row.cantidad">
                                                                </td>
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
                                            <MDBBtn color="secondary" @click="verdetalle = !verdetalle"> Cerrar
                                            </MDBBtn>

                                        </MDBModalFooter>
                                    </MDBModal>
                                    <div class="col-md-10 offset-1">
                                        <table
                                            class="table table-bordered table-sm table-hover mb-0 table table-striped">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th style="text-align:center">Código Pedido</th>
                                                    <th style="text-align:center">Usuario</th>
                                                    <th style="text-align:center">Total</th>
                                                    <th style="text-align:center">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <template v-if="aPedidos.length > 0">
                                                    <tr v-for="(row, index) in aPedidos" :key="`row-${index}`">
                                                        <td style="text-align:center;" v-text="row.label"></td>
                                                        <td style="text-align:center;" v-text="row.code"></td>
                                                        <td style="text-align:center;" v-text="row.total.toFixed(2)">
                                                        </td>
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
                        </MDBTabPane>
                        <MDBTabPane tabId="contactos">
                            <section class="text-center">
                                <h2 class="mb-5"><strong>Contactos</strong></h2>
                                <table class="table align-middle mb-0 bg-white">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>Datos</th>
                                            <th>Telefono</th>
                                            <th>Mensaje</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-if="aContactos.length > 0">

                                            <tr v-for="(row, index) in aContactos" :key="`row-${index}`">
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt=""
                                                            style="width: 45px; height: 45px" class="rounded-circle" />
                                                        <div class="ms-3">
                                                            <p class="fw-bold mb-1">{{ row.nombre }} {{ row.apellido
                                                            }}</p>
                                                            <p class="text-muted mb-0">{{ row.usuario }}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>
                                                        <span class="badge badge-success rounded-pill d-inline">{{
                                                                row.telefono
                                                        }}</span>
                                                    </h5>
                                                </td>
                                                <td style="text-align: justify; max-width: 350px;">
                                                    <p class="fw-normal mb-1"></p>
                                                    <p class="text-muted mb-0">{{ row.mensaje }}</p>
                                                </td>
                                                <td>
                                                    <template v-if="row.estado">
                                                        <button type="button" @click="cambiarestado(row.id, row.estado)"
                                                            class="btn btn-success btn-rounded">
                                                            leido
                                                        </button>
                                                    </template>
                                                    <template v-else>
                                                        <button type="button" @click="cambiarestado(row.id, row.estado)"
                                                            class="btn btn-danger btn-rounded">
                                                            No leido
                                                        </button>
                                                    </template>
                                                </td>
                                            </tr>
                                        </template>
                                        <template v-else>
                                            <tr>
                                                <td colspan="10">No hay filas para mostrar.</td>
                                            </tr>
                                        </template>

                                    </tbody>
                                </table>
                            </section>
                        </MDBTabPane>

                    </MDBTabContent>
                    <!-- Tabs content -->
                </MDBTabs>
            </div>
        </div>



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
    MDBBadge,
    MDBInput,
    MDBCheckbox,
    MDBTextarea,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBRow,
    MDBCol,
} from "mdb-vue-ui-kit";

import { ref } from 'vue';
export default {
    name: "catalog",
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
        MDBInput,
        MDBCheckbox,
        MDBTextarea,
        MDBTabs,
        MDBTabNav,
        MDBTabContent,
        MDBTabItem,
        MDBTabPane,
        MDBRow,
        MDBCol,
    },
    setup() {
        const vercarrito = ref(false);
        const form7ActiveTab = ref("contactos");
        const verdetalle = ref(false);
        
        
        return {
            form7ActiveTab,
            verdetalle,
    
            vercarrito,
        };
    },
    data() {
        return {
            aCategoriasc: [],
            aContactos: [],
            categoriaId: null,
            loading: false,
            order: {
                quantity: null
            },
            mens: null,
            menusAgregados: [],
            aPedidos: [],
            adesPedidos: [],
        }
    },
    mounted() {
        this.obtenerPedidos();
        this.obtenerContactos();
        if (localStorage.getItem('vue3.isAuthenticated') != null) {
            this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
        }
        if (localStorage.getItem('vue3.isAdmin') != null) {
            this.$store.state.isAdmin = JSON.parse(localStorage.getItem('vue3.isAdmin'));
        }
    },


    computed: {
        catalog() {
            if (this.categoriaId === null) return [];
            let categoria = this.aCategoriasc.find(x => x.idc == this.categoriaId);
            let xs = this.aMenus.filter(x => x.cat == categoria.idc);
            return xs;
        },
        productotal() {
            return this.$store.getters.productQuantity(this.mens);
        }
    },

    methods: {
        obtenerPedidos() {
            axios({
                method: "get",
                url: "http://localhost:3000/pedidos",
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
        },
        obtenerContactos() {
            axios({
                method: "get",
                url: "http://localhost:3000/contactos",
                responseType: "json"
            }).then((response) => {
                this.aContactos = [];
                if (response.status == 200) {
                    for (let i = 0; i < response.data.estatus.length; i++) {
                        this.aContactos.push({
                            id: response.data.estatus[i].id,
                            nombre: response.data.estatus[i].nombre,
                            apellido: response.data.estatus[i].apellido,
                            usuario: response.data.estatus[i].usuario,
                            telefono: response.data.estatus[i].telefono,
                            mensaje: response.data.estatus[i].mensaje,
                            estado: response.data.estatus[i].estado,
                        });

                    }

                }
            }).catch((response) => {
                console.log(response)
            });
        },
        cambiarestado(id, es) {
            if (es == 1) es = 0
            else es = 1
            let param = {
                estado: es,
            };
            axios({
                method: "put",
                url: "http://localhost:3000/contactos/" + id,
                responseType: "json",
                data: param,
            }).then((response) => {
                if (response.status == 200) {
                    this.$swal.fire({
                        icon: 'succes',
                        title: 'ESTADO CAMBIADO CON ÉXITO',
                    });
                    location.reload();
                    this.$router.go();
                }
            }).catch((response) => {
                console.log(response)
            });
        },

    },
}

</script>
  