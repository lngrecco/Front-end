import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 
  proyec: Proyectos = null;
 
  

  constructor(private tokenService: TokenService, private router: Router, private proyectosS: ProyectosService, private activatedRouter: ActivatedRoute) { }
  isLogged= false

  

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe( 
      {
      next: data =>{
        this.proyec = data;
      }, 
      error: err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
  })

  }
  reload(): void{
    this.router.navigate(['']);
  }
}

