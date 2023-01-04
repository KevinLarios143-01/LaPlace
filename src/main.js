import 'mdb-vue-ui-kit/css/mdb.min.css'
import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vuex from 'vuex'
import 'sweetalert2/dist/sweetalert2.min.css'
import '../node_modules/nprogress/nprogress.css'



//let store = new Vuex.Store(storeIndex);
router.beforeEach((to, from, next) => {
    if (!store.state.isAuthenticated && !to.path.includes("/")) {
        next({ path: '/' });
    }
    next();
});
createApp(App).use(store).use(router).use(VueSweetalert2).use(Vuex).mount('#app')
