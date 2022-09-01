import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  
  persona: Persona = null;

  constructor(public personaService: PersonaService, private router:Router, private activatedRouter: ActivatedRoute) { }

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
}