export default{
    state: {
        contador_oro:0,
        actividades:[]
    },
    sumar_oro(sacar_oro){
        this.state.contador_oro+=sacar_oro;
        console.log(this.state.contador_oro);
    },
    agregar_actividades(nueva_actividad){
        this.state.actividades=[...this.state.actividades,nueva_actividad];
    },
    reset(){
       this.state.gold=0;
       this.state.actividades=[""];
    }
}