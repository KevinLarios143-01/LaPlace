<template>

    <MDBNavbar container expand="lg" bg="*" style="background-color: #363062;" class="d-flex justify-content-between"
        position="sticky">

        <a class="navbar-brand">
            <img src="https://i.ibb.co/TkM65BZ/logo.png" alt="" width="60" height="40"
                class="d-inline-block align-text-top">
            <router-link class="nav-link" to="/">
                La Place
            </router-link>

        </a>
        <MDBNavbarToggler target="#navbarColor01" @click="collapse7 = !collapse7"></MDBNavbarToggler>
        <MDBCollapse id="navbarColor01" v-model="collapse7">
            <MDBNavbarNav class="mb-2 mb-lg-0">
                <MDBNavbarItem linkClass="link-secondary">
                    <router-link class="nav-link" to="/menu">Menu</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary" v-if="$store.state.isAuthenticated">
                    <router-link class="nav-link" to="/departamentos">Reservaciones</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary" v-if="$store.state.isAuthenticated">
                    <router-link class="nav-link" to="/solicitud">Reservar</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary" v-if="$store.state.isAuthenticated && $store.state.isAdmin">
                    <router-link class="nav-link" to="/categoria">Categorias</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary" v-if="$store.state.isAuthenticated && $store.state.isAdmin">
                    <router-link class="nav-link" to="/admin" >Panel del administrador</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary" v-if="$store.state.isAuthenticated && $store.state.isAdmin">
                    <router-link class="nav-link" to="/platillo" >Platillos</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary"  v-if="$store.state.isAuthenticated && $store.state.isAdmin">
                    <router-link class="nav-link" to="/detalles">Detalles</router-link>
                </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBCollapse>

        <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row">
            <MDBNavbarItem to="/carro" class="me-3 me-lg-0" linkClass="link-secondary"
                v-if="$store.state.isAuthenticated">
                <MDBIcon icon="shopping-cart"></MDBIcon>
            </MDBNavbarItem>
            <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary" v-if="$store.state.isAuthenticated">
                <MDBIcon icon="bell" />
                <MDBBadge notification color="danger" pill>1</MDBBadge>
            </MDBNavbarItem>
            <!-- Avatar -->
            <MDBDropdown class="nav-item" v-model="dropdown6">
                <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown6 = !dropdown6">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).webp" class="rounded-circle" alt=""
                        loading="lazy" style="width: 30px; height: 30px;" />


                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem href="/logins" v-if="!$store.state.isAuthenticated">Iniciar Sesión
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/Pedidos" v-if="$store.state.isAuthenticated">Mis Pedidos</MDBDropdownItem>
                    <MDBDropdownItem href="" @click="logout()" v-if="$store.state.isAuthenticated">Logout
                    </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </MDBNavbarNav>


    </MDBNavbar>

</template>

<script>
import {
    MDBIcon,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBBadge,
    MDBCollapse,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
    mounted(){
        
    },
    data() {
        return {


        }
    },
    name: "NavComp",
    components: {
        MDBIcon,
        MDBNavbar,
        MDBNavbarToggler,
        MDBNavbarBrand,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBDropdown,
        MDBDropdownToggle,
        MDBDropdownMenu,
        MDBDropdownItem,
        MDBBadge,
        MDBCollapse,
    },
    setup() {
        var dropdown6 = ref(false);
        var collapse7 = ref(false);
        //const dropdown6 = ref(false);

        return {
            dropdown6,
            collapse7,
        }
    },
    methods: {
        logout() {
            this.$store.state.isAuthenticated = false;
            this.$store.state.user = "";
            this.$store.state.isAdmin = false;
            this.$store.state.cart=[];
            this.$router.push("/");
            this.datalocalstorage();
        },
        datalocalstorage() {
            localStorage.setItem('vue3.isAdmin', JSON.stringify(this.$store.state.isAdmin));
            localStorage.setItem('vue3.isAuthenticated', JSON.stringify(this.$store.state.isAuthenticated));
            localStorage.setItem('vue3.usuario', JSON.stringify(this.$store.state.user));
            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart));
        },
    }
};
</script>


