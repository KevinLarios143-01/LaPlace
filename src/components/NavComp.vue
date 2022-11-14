<template>

    <MDBNavbar container expand="lg" bg="*" style="background-color: #363062;" class="d-flex justify-content-between"
        position="sticky">

        <a class="navbar-brand">
            <img src="https://i.ibb.co/TkM65BZ/logo.png" alt="" width="60" height="40" class="d-inline-block align-text-top">
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
                <MDBNavbarItem linkClass="link-secondary">
                    <router-link class="nav-link" to="/departamentos">Departamentos</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary">
                    <router-link class="nav-link" to="/solicitud">Solicitud</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary">
                    <router-link class="nav-link" to="/categoria">Categoria</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary">
                    <router-link class="nav-link" to="/estatus">Status</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary">
                    <router-link class="nav-link" to="/precios">Precios</router-link>
                </MDBNavbarItem>
                <MDBNavbarItem linkClass="link-secondary">
                    <router-link class="nav-link" to="/about">About</router-link>
                </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBCollapse>

        <MDBNavbarNav class="mb-2 mb-lg-0 d-flex flex-row">
            <MDBNavbarItem to="/nombre" class="me-3 me-lg-0" linkClass="link-secondary">
                <MDBIcon icon="shopping-cart"></MDBIcon>
            </MDBNavbarItem>
            <MDBNavbarItem to="#" class="me-3 me-lg-0" linkClass="link-secondary">
                <MDBIcon icon="bell" />
                <MDBBadge notification color="danger" pill>1</MDBBadge>
            </MDBNavbarItem>
            <MDBNavbarItem href="#" class="me-3 me-lg-0">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22"
                    alt="" loading="lazy" />
            </MDBNavbarItem>
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
        var dropdown3 = ref(false);
        var collapse7 = ref(false);

        return {
            dropdown3,
            collapse7,
        }
    }
};
</script>


