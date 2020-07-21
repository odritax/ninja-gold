<template>
      <div class="col m3">
        <div class="card orange">
        <div class="card-content white-text">
          <span class="card-title">{{titulo}}</span>
          <p>Vas a ganar entre {{min}} y {{max}} de oro</p><br>
          <button v-on:click="AgregaOro" class="waves-effect waves-light btn">Buscar Oro</button>
        </div>
      </div>
      </div>
</template>
<script>
import OroInicial from '@/OroInicial.js'
export default {
  name:'Gold',
  props: {
    titulo:String,
    min:Number,
    max:Number,
    Actividad:String
  },
  methods: {
    AgregaOro: function(){
      const sacar_oro= Math.round(Math.random() * (this.max - this.min)+ this.min);
      console.log(sacar_oro);
      OroInicial.sumar_oro(sacar_oro);
      const dia = new Date()
      const fecha =`${dia.getDate()}/${dia.getMonth()}/${dia.getFullYear()}`;
      const hora = `${dia.getHours()}:${dia.getMinutes()}`;
      const nueva_actividad=`${sacar_oro<0?'Perdiste':'Ganaste'} ${sacar_oro} desde ${this.titulo} ${hora}  ${fecha}`;
      OroInicial.agregar_actividades(nueva_actividad);
    }
  }
}
</script>

<style scoped>
.card{
  text-align: center;
  border-radius: 5px;
}

</style>
