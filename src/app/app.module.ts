import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { InstitucionalComponent } from './institucional/institucional.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { LoginComponent } from './login/login.component';
import { PaginaComponent } from './pagina/pagina.component';
import { CarreraListarComponent } from './pagina/carrera-listar/carrera-listar.component';
import { CarreraEditarComponent } from './pagina/carrera-editar/carrera-editar.component';
import { CarreraCargarComponent } from './pagina/carrera-cargar/carrera-cargar.component';
import { CarrerasService } from './service/carreras.service';
import { EstudiantesListarComponent } from './pagina/estudiantes-listar/estudiantes-listar.component';
import { EstudiantesCargarComponent } from './pagina/estudiantes-cargar/estudiantes-cargar.component';
import { EstudiantesEditarComponent } from './pagina/estudiantes-editar/estudiantes-editar.component';
import { EstudiantesService } from './service/estudiantes.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    InstitucionalComponent,
    InscripcionComponent,
    LoginComponent,
    PaginaComponent,
    CarreraListarComponent,
    CarreraEditarComponent,
    CarreraCargarComponent,
    EstudiantesListarComponent,
    EstudiantesCargarComponent,
    EstudiantesEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    CarrerasService,
    EstudiantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
