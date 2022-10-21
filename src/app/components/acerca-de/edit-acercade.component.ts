import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImgService } from 'src/app/service/img.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  
  persona: Persona = null;

  constructor(public personaService: PersonaService, private router:Router, private activatedRouter: ActivatedRoute, public imgService: ImgService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(
      {
      next: data =>{
        this.persona = data;
      }, 
      error: err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
  })
  }
  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imgService.url
    this.personaService.update(id, this.persona).subscribe(
      {
      next: data =>{
        this.router.navigate(['']);
      },
      error: err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
  })
  }
  uploadImg($event:any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
  this.imgService.uploadImg($event, name)
  }
  reload(): void{
    this.router.navigate(['']);
  }
} 