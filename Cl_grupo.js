export default class Cl_grupo {
    constructor() {
        this.acumEdad = 0;
        this.cantPersonas = 0;
    }

    procesarPersona(p){
        this.acumEdad += p.edad;
        this.cantPersonas++;
    }
   
    
    

    calcularPromedio(){
        return this.acumEdad/this.cantPersonas;
    }

      
}
