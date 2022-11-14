<template>
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <MDBTabs v-model="form7ActiveTab">
                <!-- Tabs navs -->
                <MDBTabNav pills justify tabsClasses="mb-3">
                    <MDBTabItem tabId="login" href="login">Login</MDBTabItem>
                    <MDBTabItem tabId="register" href="register">
                        Registrarse
                    </MDBTabItem>
                </MDBTabNav>
                <!-- Tabs navs -->
                <!-- Tabs content -->
                <MDBTabContent>
                    <MDBTabPane tabId="login">
                        <form class="was-validated">
                            <div class="text-center mb-3">
                                <p>Ingresar con:</p>
                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </MDBBtn>

                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-google"></i>
                                </MDBBtn>

                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-twitter"></i>
                                </MDBBtn>

                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-github"></i>
                                </MDBBtn>
                            </div>

                            <p class="text-center">O ingresar con:</p>

                            <!-- Email input -->
                            <MDBInput type="email" label="Usuario o Correo" id="LoginEmail" v-model="LoginEmail"
                                wrapperClass="mb-4" required />

                            <!-- Password input -->
                            <MDBInput type="password" label="Contraseña" id="LoginPassword" v-model="LoginPassword"
                                wrapperClass="mb-4" required />

                            <!-- 2 column grid layout for inline styling -->
                            <MDBRow class="mb-4">

                                <MDBCol>
                                    <!-- Simple link -->
                                    <a href="#!">Olvidó su contraseña?</a>
                                </MDBCol>
                            </MDBRow>

                            <!-- Submit button -->
                            <MDBBtn color="primary" @click="login()" block class="mb-4"> Ingresar</MDBBtn>

                            <!-- Register buttons -->
                            <div class="text-center">
                                <p>No estás registrado? <a href="">Registrate</a></p>
                            </div>
                        </form>
                    </MDBTabPane>
                    <MDBTabPane tabId="register">
                        <form class="was-validated">
                            <div class="text-center mb-3">
                                <p>Registrarse con:</p>
                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </MDBBtn>

                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-google"></i>
                                </MDBBtn>

                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-twitter"></i>
                                </MDBBtn>

                                <MDBBtn color="primary" floating class="mx-1">
                                    <i class="fab fa-github"></i>
                                </MDBBtn>
                            </div>

                            <p class="text-center">o bien:</p>

                            <!-- Name input -->
                            <MDBInput type="text" label="Nombre" id="RegisterName" v-model="RegisterName"
                                wrapperClass="mb-4" required />

                            <!-- Username input -->
                            <MDBInput type="text" label="Usuario" id="RegisterUsername" v-model="RegisterUsername"
                                wrapperClass="mb-4" required />

                            <!-- Email input -->
                            <MDBInput type="email" label="Correo Electrónico" id="RegisterEmail" v-model="RegisterEmail"
                                wrapperClass="mb-4" required />

                            <!-- Password input -->
                            <MDBInput type="password" label="Contraseña" id="RegisterPassword"
                                v-model="RegisterPassword" wrapperClass="mb-4" required />

                            <!-- Repeat Password input -->
                            <MDBInput type="password" label="Repetir Contraseña" id="RegisterPasswordRepeat"
                                v-model="RegisterPasswordRepeat" wrapperClass="mb-4" required />

                            <!-- Checkbox -->
                            <MDBCheckbox label="Acepto los términos de la página" id="RegisterTermsCheck"
                                v-model="RegisterTermsCheck" wrapperClass="d-flex justify-content-center mb-4" />

                            <!-- Submit button -->
                            <MDBBtn color="primary"  block class="mb-3"> Registrarse </MDBBtn>
                        </form>
                    </MDBTabPane>
                </MDBTabContent>
                <!-- Tabs content -->
            </MDBTabs>
        </div>
    </div>
</template>
<script>
//import axios from 'axios';
import {
    MDBInput,
    MDBCheckbox,
    MDBTextarea,
    MDBBtn,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBRow,
    MDBCol,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
    components: {
        MDBInput,
        MDBCheckbox,
        MDBTextarea,
        MDBBtn,
        MDBTabs,
        MDBTabNav,
        MDBTabContent,
        MDBTabItem,
        MDBTabPane,
        MDBRow,
        MDBCol,
    },
    setup() {
        const form7ActiveTab = ref("login");
        const LoginEmail = ref("");
        const LoginPassword = ref("");
        const LoginCheck = ref(true);
        const RegisterName = ref("");
        const RegisterUsername = ref("");
        const RegisterEmail = ref("");
        const RegisterPassword = ref("");
        const RegisterPasswordRepeat = ref("");
        const RegisterTermsCheck = ref(true);

        return {
            form7ActiveTab,
            LoginEmail,
            LoginPassword,
            LoginCheck,
            RegisterName,
            RegisterUsername,
            RegisterEmail,
            RegisterPassword,
            RegisterPasswordRepeat,
            RegisterTermsCheck,
        };
    },
    data() {
        return {
            usuario: "",
            password: "",
            usua: "",
            pass: "",
            mensaje: "",
            res: "",
            /*LoginEmail : "",
            LoginPassword : "",
            LoginCheck : "",
            RegisterName : "",
            RegisterUsername : "",
            RegisterEmail : "",
            RegisterPassword : "",
            RegisterPasswordRepeat : "",
            RegisterTermsCheck : "",*/
        };
    },
    mounted() { },
    methods: {
        obtenerLogin() {
            axios({
                method: "get",
                url: "https://forzag.herokuapp.com/login",
                responseType: "json"
            }).then((response) => {
                if (response.status == 200) {
                    this.usuario = "";
                    this.password = "";
                    for (let i = 0; i < response.data.login.length; i++) {
                        this.usuario = response.data.login[i].usuario,
                            this.password = response.data.login[i].contraseña
                        if (this.usuario == this.usua) {
                            if (this.password == this.pass) {
                                this.$swal.fire({
                                    icon: 'success',
                                    title: 'INGRESÓ CON ÉXITO',
                                });
                                this.$router.push('verpedidos')
                                i = response.data.login.length;
                            } else {
                                this.$swal.fire({
                                    icon: 'error',
                                    title: 'USUARIO O CONTRASEÑA INCORRECTOS',
                                });
                            }
                        } else {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'USUARIO O CONTRASEÑA INCORRECTOS',
                            });
                        }
                    }

                }
            });
        },
        login() {
            //this.obtenerLogin();
            this.$store.state.isAuthenticated =true;
            this.$router.push("/");
        },
    },
};
</script>
