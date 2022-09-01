export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaE: string;
    tituloE: string;
    localidadE: string;
    contactoE: string;

    constructor(nombreE: string, descripcionE: string, fechaE: string, tituloE: string, localidadE: string, contactoE: string){
        this.nombreE= nombreE;
        this.descripcionE= descripcionE;
        this.fechaE = fechaE; 
        this.tituloE = tituloE;
        this.localidadE = localidadE;
        this.contactoE = contactoE;
    }
}
