<template>

    <!-- Footer -->
    <MDBFooter bg="none" :text="['center', 'white']" style="background-color: #363062">
        <!-- Grid container -->
        <MDBContainer class="pt-4">
            <!-- Section: CTA -->
            <section class="">
                <p class="d-flex justify-content-center align-items-center">
                    <span class="me-3">Registrate aquí</span>
                    <MDBBtn outline="light" rounded> Sign up! </MDBBtn>
                </p>
            </section>
            <!-- Section: CTA -->
            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- Facebook -->
                <a class="btn btn-link btn-floating btn-lg text-light m-1" href="#!" role="button"
                    v-mdb-ripple="{ color: 'dark' }">
                    <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
                </a>
                <!-- Twitter -->
                <a class="btn btn-link btn-floating btn-lg text-light m-1" href="#!" role="button"
                    v-mdb-ripple="{ color: 'dark' }">
                    <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
                </a>
                <!-- Google -->
                <a class="btn btn-link btn-floating btn-lg text-light m-1" href="#!" role="button"
                    v-mdb-ripple="{ color: 'dark' }">
                    <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
                </a>
                <!-- Instagram -->
                <a class="btn btn-link btn-floating btn-lg text-light m-1" href="#!" role="button"
                    v-mdb-ripple="{ color: 'dark' }">
                    <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
                </a>
                <!-- Linkedin -->
                <a class="btn btn-link btn-floating btn-lg text-light m-1" href="#!" role="button"
                    v-mdb-ripple="{ color: 'dark' }">
                    <MDBIcon iconStyle="fab" icon="linkedin"></MDBIcon>
                </a>
                <!-- Github -->
                <a class="btn btn-link btn-floating btn-lg text-light m-1" href="#!" role="button"
                    v-mdb-ripple="{ color: 'dark' }">
                    <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
                </a>
            </section>
            <!-- Section: Social media -->
        </MDBContainer>
        <!-- Grid container -->
        <!-- Copyright -->
        <div class="text-center text-light p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2022 Copyright:
            <a class="text-light" href="/">LaPlace</a>
        </div>
        <!-- Copyright -->
    </MDBFooter>
</template>
<script>
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, mdbRipple, MDBBtn } from 'mdb-vue-ui-kit';

export default {
    name: "FooterComp",
    components: {
        MDBFooter,
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBIcon,
        MDBBtn,
    },
    directives: {
        mdbRipple
    }
};
</script>