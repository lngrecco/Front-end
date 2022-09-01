export class Proyectos {
    id?: number;
    nombre: string;
    imagen: string;
    informacion: string;
    enlace: string;

    constructor(nombre: string, imagen: string, informacion: string, enlace: string){
this.nombre = nombre;
this.imagen = imagen;
this.informacion = informacion;
this.enlace = enlace;
}
}
