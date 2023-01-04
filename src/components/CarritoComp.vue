<template>
    <MDBCard class="mb-3" style="width: 500px;">
        <MDBRow class="g-0">
            <MDBCol md="4">
                <MDBCardImg fluid src="https://i.ibb.co/Rc7yjjP/comida2.jpg" alt="..." />
            </MDBCol>
            <MDBCol md="8">
                <MDBCardBody>
                    <MDBCardTitle>
                        <h2>{{ product.name }}</h2>
                    </MDBCardTitle> <br>
                    <MDBCardText>
                        <h3>
                            Cantidad <MDBBadge color="danger" class="ms-2">{{ product.quantity }}</MDBBadge>
                        </h3>
                        
                        <h3>Q{{ product.price.toFixed(2) }}</h3>
                        <h4>
                            <MDBBadge badge="secondary"> Total: Q{{ itemcost }}</MDBBadge>
                        </h4>
                       
                    </MDBCardText>
                </MDBCardBody>
            </MDBCol>
        </MDBRow>
    </MDBCard>
</template>
<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBRow, MDBCol, MDBCardImg, MDBBadge, MDBBtn } from "mdb-vue-ui-kit";
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
        MDBBadge, 
        MDBBtn
    },
    data() {
        return {

        }
    },
    props: ['product'],
    mounted() {
        if (localStorage.getItem('vue3.isAuthenticated') != null) {
            this.$store.state.isAuthenticated = JSON.parse(localStorage.getItem('vue3.isAuthenticated'));
        }

    },
    computed: {
        itemcost() {
            return (this.product.price * this.product.quantity).toFixed(2);
        },
    },
    methods: {

    }
};
</script>