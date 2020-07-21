export default{
    state: {
        contador_oro:0,
        actividad:[]
    },
    sumar_oro(sacar_oro){
        this.state.contador_oro+=sacar_oro;
        console.log(this.state.contador_oro);
    },
    agregar_actividades(nueva_actividad){
        this.state.actividad=[...this.state.actividad,nueva_actividad];
    }
}