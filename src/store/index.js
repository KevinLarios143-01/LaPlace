import { createStore } from 'vuex'

function updateLocalStorage(cart){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export default createStore ({
  state: {
    isAuthenticated: false,
    user: "",
    cart:[],
    isAdmin: false,
  },
  getters: {
    productQuantity: state => mens => {
      const item= state.cart.find(i=> i.id===mens.id);
      if(item) {
        return item.quantity;
      }
      else {
        return 0;
      }
    },
    cartItems: state => {
      return state.cart;
    },
    carritoTotal: state => {
      return state.cart.reduce((a,b) => a + (b.price * b.quantity), 0);
    },
    carrInsertar: state=>{
      return state.cart.filter()
    }
  },
  mutations: {
    addToCart(state, mens){
      let item= state.cart.find(i=> i.id === mens.id);
      
      if(item){
        item.quantity++;
      }else{
        state.cart.push({...mens, quantity:1});
      }
      updateLocalStorage(state.cart);
    },
    removeFromCart(state, mens){
      let item=state.cart.find(i => i.id === mens.id)
      if(item){
        if(item.quantity>1){
          item.quantity--;
        }else{
          state.cart = state.cart.filter(i=> i.id !== mens.id)
        }
      }
      updateLocalStorage(state.cart);
    },
    UpdateCartFromLocalStorage(state){
      const cart = localStorage.getItem('cart');
      if(cart){
        state.cart=JSON.parse(cart);
      }
    },
    UpdateUserFromLocalStorage(state){
      const users = localStorage.getItem('vue3.usuario');
      if(users){
        state.user=JSON.parse(users);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})


