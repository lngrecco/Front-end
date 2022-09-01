export class Habilidades {
    id?: number;
    habilidad: string;
    porcentaje: string;

    constructor(habilidad: string, porcentaje: string){
        this.habilidad= habilidad;
        this.porcentaje= porcentaje;
    }

}
