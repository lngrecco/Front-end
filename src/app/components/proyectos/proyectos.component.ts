import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[]=[];
  nombre: string;
  imagen: string;
  informacion: string;
  enlace: string;
 
  

  constructor(private tokenService: TokenService, private router: Router, private proyectosS: ProyectosService) { }
  isLogged= false

  

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyectos(){
    this.proyectosS.lista().subscribe(
      data =>{
        this.proyectos= data;
      }
    )
  }
  delete(id?: number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(
        {
        next: data =>{
          this.cargarProyectos();
        }, 
        error: err =>{
          alert("No se pudo eliminar");
        }
    })
    }
  }

  onCreate(): void{
    const proyectos= new Proyectos(this.nombre, this.imagen, this.informacion, this.enlace);
    this.proyectosS.save(proyectos).subscribe(
      {
      next: data =>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, 
      error: err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
  })
  }

}
