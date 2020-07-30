import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

Vue.config.productionTip = false

Vue.use(Vuex)
  
const store = new Vuex.Store({
  state: {
    contador_oro:0,
    actividades:[]
  },  
  mutations: {
    sumar_oro(state,sacar_oro){
      state.contador_oro+=sacar_oro;
      console.log(sacar_oro);
   },
   agregar_actividades(state,nueva_actividad){
      state.actividades=[...this.state.actividades,nueva_actividad];
   },
   reset(state){
      state.gold=0;
      state.actividades=[''];
   }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
