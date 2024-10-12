import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EstudiantesService } from 'src/app/service/estudiantes.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-estudiantes-editar',
  templateUrl: './estudiantes-editar.component.html',
  styleUrls: ['./estudiantes-editar.component.css']
})
export class EstudiantesEditarComponent implements OnInit {


  elID:any;
  formEstudiantes: FormGroup;


  constructor(
    public formulario:FormBuilder,
    private rutaactiva:ActivatedRoute,
    private estudiantesService:EstudiantesService,
    private router:Router,
    private http:HttpClient,
  ){
    this.formEstudiantes=this.formulario.group({
      nombre:[''],
      apellido:[''],
      dni:[''],
      telefono:[''],
      email:[''],
    });
  }


  ngOnInit(): void {
    this.elID=this.rutaactiva.snapshot.paramMap.get('id');
    this.formEstudiantes = this.formulario.group({
      nombre: [''],
      apellido: [''],
      dni: [''],
      telefono: [''],
      email: [''],
    });

    this.estudiantesService.getEstudiantesById(this.elID).subscribe((respuesta) => {
      if (respuesta && respuesta[0]) {
        this.formEstudiantes.patchValue({
          nombre: respuesta[0]['nombre'],
          apellido: respuesta[0]['apellido'],
          dni: respuesta[0]['dni'],
          telefono: respuesta[0]['telefono'],
          email: respuesta[0]['email'],
        });
      }
    });
   }


   actualizarEstudiantes():void{
    const idestudiantes = this.elID;
    const nuevoNom=this.formEstudiantes.get('nombre')?.value;
    const nuevoAp=this.formEstudiantes.get('apellido')?.value;
    const nuevoDNI=this.formEstudiantes.get('dni')?.value;
    const nuevoTel=this.formEstudiantes.get('telefono')?.value;
    const nuevoEm=this.formEstudiantes.get('email')?.value;

    this.estudiantesService.updateEstudiantes(idestudiantes,nuevoNom, nuevoAp, nuevoDNI, nuevoTel,nuevoEm)
  
  

    .subscribe(
      respuesta => {
        console.log('Modificación Correcta',respuesta);
        this.router.navigateByUrl('/getest');
      },
      error=>{
        console.error('Error',error);
      }
    );
  }



}
