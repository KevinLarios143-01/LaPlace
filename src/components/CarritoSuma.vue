<template>
    <MDBCard class="mb-3" style="width: 500px;">
        <MDBRow class="g-0">
            <MDBCol md="4">
                <MDBCardImg fluid src="https://i.ibb.co/hBKr6v3/tar.jpg" alt="..." />
            </MDBCol>
            <MDBCol md="8">
                <MDBCardBody>
                    <MDBCardTitle>
                        <h2>Total de compra: Q{{carttotal}}</h2>
                    </MDBCardTitle>
                    <MDBBtn color="primary" size="lg" >Realizar pedido</MDBBtn>
                </MDBCardBody>
            </MDBCol>
        </MDBRow>
    </MDBCard>
</template>
<script>
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
            
        }
    },
    mounted() {
        if (localStorage.getItem('vue3.isAuthenticated') != null) {
            this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
        }

    },
    computed: {
        carttotal() {
            return this.$store.getters.carritoTotal.toFixed(2);
        },
    },
    methods: {

    }
};
</script>