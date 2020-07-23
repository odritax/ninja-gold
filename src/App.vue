<template>
<div>
  <h3 id="titulo">Tu Oro es: <span v-bind:class="{verde: contador_oro > 0, rojo: contador_oro < 0 }">{{contador_oro}}</span></h3>
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
            <li v-bind:class="{verde: actividad.num > 0, rojo: actividad.num < 0 }" v-for="(actividad,i) in actividades" v-bind:key="i">{{actividad.texto}} 
            <a><span class="close" v-on:click="$delete(actividades,i)">x</span></a></li>
          </ul>
        </div>
      </div>
      <Reset/>
</div>
</template>
<script>
import Gold from '@/components/Gold.vue'
import OroInicial from '@/OroInicial.js'
import Reset from '@/components/Reset.vue'
export default {
  name: 'App',
   data: function(){
   return OroInicial.state
  },
  components: {
  Gold,
  Reset
  }
}
</script>

<style>
body{
  font-family: 'Ubuntu', sans-serif;
  background-color: #33AD8F;
  color: grey;
}
#titulo{
  text-align: center;
  color: white;
}
.rojo{
  color:#FC7861;
}
.verde{
  color:#24A93B;
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
