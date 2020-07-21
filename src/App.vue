<template>
<div>
  <h3 id="titulo">Tu Oro es: {{contador_oro}}</h3>
      <div class="row">
          <Gold titulo="Granja" :min="2" :max="5"  direccion="granja"/>
          <Gold titulo="Cueva"  :min="5" :max="10" direccion="cueva"/>
          <Gold titulo="Casa"   :min="2" :max="5"  direccion="casa"/>
          <Gold titulo="Casino" :min="-50" :max="50" direccion="casino"/>
      </div>
      <div id="actividades">
        <h4>Actividades</h4>
        <div id="lista">
          <ul>
            <li v-for="(actividad,i) in actividades" v-bind:key="i">{{actividad}} 
            <a><span class="close" v-on:click="$delete(actividades,i)">x</span></a></li>
          </ul>
        </div>
      </div>
</div>
</template>
<script>
import Gold from '@/components/Gold.vue'
import OroInicial from '@/OroInicial.js'
export default {
  name: 'App',
   data: function(){
    return OroInicial.state
  },
  components: {
  Gold
  }
}
</script>

<style>
body{
  font-family: 'Ubuntu', sans-serif;
  background-color: #26a69a;
  color: grey;
}
#titulo{
  text-align: center;
  color: white;
}
#cofre{
  position:relative;
  top:20px;
  width:120px;
}
#actividades{
  background-color: white;
  margin:20px;
  padding:20px;
  border-radius:5px;
  height: 200px;
  overflow-y: scroll;
}
#lista{
  height:auto;
}
a{
  cursor: pointer;
}
</style>
