import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  nombreE: string= '';
  descripcionE: string= '';
  fechaE: string= '';
  tituloE: string= '';
  localidadE: string= '';
  contactoE: string= '';
  expe: Experiencia[]=[];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService,private router: Router) { }

  isLogged = false

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;}) 
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        {
        next: data =>{
          this.cargarExperiencia();
        }, 
        error: err =>{
          alert("No se pudo borrar la experiencia");
        }
    })
    }
  }
  onCreate(): void{
    const expe= new Experiencia(this.nombreE, this.descripcionE, this.fechaE, this.tituloE, this.localidadE, this.contactoE); 
    this.sExperiencia.save(expe).subscribe(
      {
      next: data =>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, 
      error: err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
  }) 
  }
}


