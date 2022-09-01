export class Persona{

   id?: number;
   nombre: string;
   apellido: string;
   img: string;
   fecha: string;
   ciudad: string;
   edad: string;
   telefono: string;
   email: string;
   nacionalidad: string;
   direccion: string;
   profesion: string;
   acerca: string;
   demi: string;

constructor(nombre: string, apellido: string, img: string, fecha: string, ciudad: string, edad: string, telefono: string, email: string, nacionalidad: string, direccion: string, profesion: string, acerca: string, demi: string, id?: number){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.fecha = fecha;
    this.ciudad = ciudad;
    this.edad = edad;
    this.telefono = telefono;
    this.email = email;
    this.direccion = direccion;
    this.nacionalidad = nacionalidad;
    this.profesion = profesion;
    this.acerca = acerca;
    this.demi = demi;
    this.id= id;
}   
}