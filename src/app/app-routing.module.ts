import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { LoginComponent } from './login/login.component';
import { CarreraListarComponent } from './pagina/carrera-listar/carrera-listar.component';
import { CarreraCargarComponent } from './pagina/carrera-cargar/carrera-cargar.component';
import { EstudiantesListarComponent } from './pagina/estudiantes-listar/estudiantes-listar.component';
import { EstudiantesCargarComponent } from './pagina/estudiantes-cargar/estudiantes-cargar.component';
import { CarreraEditarComponent } from './pagina/carrera-editar/carrera-editar.component';
import { EstudiantesEditarComponent } from './pagina/estudiantes-editar/estudiantes-editar.component';

const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'instituto',component: InstitucionalComponent},
  {path:'inscripcion',component: InscripcionComponent},
  {path:'login',component: LoginComponent},
  {path:'carrera',component:CarreraListarComponent},
  {path:'getest',component:EstudiantesListarComponent},
  {path:'postest',component:EstudiantesCargarComponent},
  {path:'carrerapost',component:CarreraCargarComponent},
  {path:'carreraed/:id',component:CarreraEditarComponent},
  {path:'editarest/:id',component:EstudiantesEditarComponent},
  {path:'**',component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
