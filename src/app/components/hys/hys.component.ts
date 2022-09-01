import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  habilidades: Habilidades[]=[];
  habilidad: string;
  porcentaje: string;
  Habili: Habilidades=null;


  constructor( private tokenService: TokenService, private habilidadesS: HabilidadesService, private router: Router) { }
  isLogged= false

  ngOnInit(): void {
    this.cargarHabilidades();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
   cargarHabilidades(){
    this.habilidadesS.lista().subscribe(
      data =>{
        this.habilidades= data;
      }
    )
  }
  
  delete(id?: number){
    if(id != undefined){
      this.habilidadesS.delete(id).subscribe(
        {
        next: data =>{
          this.cargarHabilidades();
        }, 
        error: err =>{
          alert("No se pudo eliminar");
        }
    })
    }
  }
  onCreate(): void{
    const habilidades= new Habilidades(this.habilidad, this.porcentaje);
    this.habilidadesS.save(habilidades).subscribe(
      {
      next: data =>{
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, 
      error: err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
  })
  }
 
  }
