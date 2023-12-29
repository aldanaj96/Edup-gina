import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EstudiantesService } from 'src/app/service/estudiantes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes-cargar',
  templateUrl: './estudiantes-cargar.component.html',
  styleUrls: ['./estudiantes-cargar.component.css']
})
export class EstudiantesCargarComponent implements OnInit {
   
  estudiantes={
    nombre:'',
    apellido:'',
    dni:'',
    telefono:'',
    email:'',
    
  }

  constructor(
    private router : Router,
    private estudiantesService:EstudiantesService
  ){ }


  crearEstudiantes(){
    this.estudiantesService.insertEstudiantes(this.estudiantes)
    .subscribe
    (
      (data) => {
        console.log("Se ha añadido la carrera correctamente");
        this.router.navigateByUrl('/listarcarreras');
      },
      (error)=>{
        alert('Error al insertar');
      }
    );
  }

  ngOnInit(): void { }

}
