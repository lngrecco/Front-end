export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaE: string;
    tituloE: string;
    localidadE: string;
    contactoE: string;

    constructor(nombreE: string, descripcionE: string, fechaE: string, tituloE: string, localidadE: string, contactoE: string, id?: number){
        this.nombreE= nombreE;
        this.descripcionE= descripcionE;
        this.id = id;
        this.fechaE = fechaE;
        this.tituloE = tituloE;
        this.localidadE = localidadE;
        this.contactoE = contactoE;
    }
}

