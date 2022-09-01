import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  nombreE: string= '';
  descripcionE: string= '';
  fechaE: string= '';
  tituloE: string= '';
  localidadE: string= '';
  contactoE: string= '';
  edu: Educacion[] = [];
  educa: Educacion= null;

  
  constructor(private educacionS: EducacionService, private tokenService: TokenService, private router: Router, private activatedRouter: ActivatedRoute) { }
  isLogged= false;

  ngOnInit(): void {
    

    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else{
      this.isLogged= false;
    }
    
  } 

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.edu= data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        {
        next: data =>{
          this.cargarEducacion();
        }, 
        error: err =>{
          alert("No se pudo eliminar");
        }
    })
    }
  }

  onCreate(): void{
    const edu= new Educacion(this.nombreE, this.descripcionE, this.fechaE, this.tituloE, this.localidadE, this.contactoE);
    this.educacionS.save(edu).subscribe(
      {
      next: data =>{
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, 
      error: err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
  })
  }
}  


