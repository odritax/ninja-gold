<template>
<div>
  <h3 id="titulo">Tu Oro es: {{contador_oro}}</h3>
      <div class="row">
          <Gold titulo="Granja" :min="2" :max="5"/>
          <Gold titulo="Cueva"  :min="5" :max="10"/>
          <Gold titulo="Casa"   :min="2" :max="5"/>
          <Gold titulo="Casino" :min="-50" :max="50"/>
      </div>
      <div id="actividades">
        <h4>Actividades</h4>
        <ul>
          <li v-for="(actividad,i) in actividad" v-bind:key="i">{{actividad}}</li>
        </ul>
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
  background-color:#DFDCDB;
  font-family: 'Hind Siliguri', sans-serif;
}
#titulo{
  text-align: center;
}
#actividades{
 margin:20px;
}

</style>
