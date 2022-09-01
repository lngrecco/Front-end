import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';

import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { InfoComponent } from './components/proyectos/info.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'info/:id', component: InfoComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'editme/:id', component: EditAcercadeComponent},
  {path:'editedu/:id', component: EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
