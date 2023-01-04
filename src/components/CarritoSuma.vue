<template>
    <MDBCard class="mb-3" style="width: 500px;">
        <MDBRow class="g-0">
            <MDBCol md="4">
                <MDBCardImg fluid src="https://i.ibb.co/hBKr6v3/tar.jpg" alt="..." />
            </MDBCol>
            <MDBCol md="8">
                <MDBCardBody>
                    <MDBCardTitle>
                        <h2>Total de compra: Q{{ carttotal.toFixed(2) }}</h2>
                    </MDBCardTitle>
                    <MDBBtn color="primary" size="lg" @click="comprado()" v-if="carttotal">Realizar pedido</MDBBtn>
                </MDBCardBody>
            </MDBCol>
        </MDBRow>
    </MDBCard>
</template>
<script>
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBRow, MDBCol, MDBCardImg, MDBBtn } from "mdb-vue-ui-kit";
export default {
    components: {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardHeader,
        MDBCardFooter,
        MDBRow,
        MDBCol,
        MDBCardImg,
        MDBBtn,
    },
    data() {
        return {
            usuario: "",
            menus: [],
            total: 0,
        }
    },
    mounted() {
        if (localStorage.getItem('vue3.isAuthenticated') != null) {
            this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
        }

    },
    computed: {
        carttotal() {
            return this.$store.getters.carritoTotal;
        },
    },
    methods: {
        comprado() {
            this.usuario = this.$store.state.user;
            this.menus = this.$store.state.cart;
            this.total = this.carttotal;
            const swalWithBootstrapButtons = this.$swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            });

            swalWithBootstrapButtons.fire({
                title: '¿Seguro que quiere realizar el pedido?',
                text: "Su pedido será procesado inmediatamente!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Realizar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {

                    //realizar pedido
                    let param = {
                        usuario: this.usuario,
                        total: this.total
                    };
                    axios({
                        method: "post",
                        url: "http://localhost:3000/pedidos",
                        responseType: "json",
                        data: param,
                    }).then((response) => {
                        if (response.status == 200) {
                            let ids = response.data.estatus[0].id;
                            for (let i = 0; i < this.menus.length; i++) {
                                const element = this.menus[i];
                                let param2 = {
                                    pedido: ids,
                                    cantidad: element.quantity,
                                    menu: element.id
                                };
                                axios({
                                    method: "post",
                                    url: "http://localhost:3000/detallepedidos",
                                    responseType: "json",
                                    data: param2,
                                }).then((response) => {
                                    if (response.status == 200) {
                                        console.log("nice: " + i)
                                    }
                                }).catch((response) => {

                                });
                            }
                            this.$store.state.cart=[];
                            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart));
                            swalWithBootstrapButtons.fire('Enviado', 'Su pedido fue realizado con exito!', 'success')
                        } else {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'ERROR AL GUARDAR USUARIO',
                            });
                        }
                    }).catch((response) => {
                        this.$swal.fire({
                                icon: 'error',
                                title: 'ERROR AL GUARDAR USUARIO',
                            });
                    });

                    //termina realizado pedido


                    /* Read more about handling dismissals below */
                } else if (result.dismiss === this.$swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelado', 'Su pedido se mantendrá en el carrito', 'error')
                }
            });


        },
    }
};
</script>