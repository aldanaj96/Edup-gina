import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CarrerasService } from 'src/app/service/carreras.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carrera-editar',
  templateUrl: './carrera-editar.component.html',
  styleUrls: ['./carrera-editar.component.css']
})
export class CarreraEditarComponent implements OnInit {


elID:any;
formCarreras: FormGroup;


constructor(
  public formulario:FormBuilder,
  private rutaactiva:ActivatedRoute,
  private carrerasService:CarrerasService,
  private router:Router,
  private http:HttpClient,
)
{
  this.formCarreras=this.formulario.group({
    nombres:[''],
  });
}
  

ngOnInit(): void {
  this.elID=this.rutaactiva.snapshot.paramMap.get('id');
  this.formCarreras = this.formulario.group({
    nombres: [''],
  });

  this.carrerasService.getCarreraById(this.elID).subscribe((respuesta) => {
    if (respuesta && respuesta[0]) {
      this.formCarreras.patchValue({
        nombres: respuesta[0]['nombres'],
      });
    }
  });
}


actualizarCarrera():void{
  const idcarrera = this.elID;
  const nuevoNombre=this.formCarreras.get('nombres')?.value;

  this.carrerasService.updateCarrera(idcarrera,nuevoNombre)
  .subscribe(
    respuesta => {
      console.log('Modificación Correcta',respuesta);
      this.router.navigateByUrl('/listarcarreras');
    },
    error=>{
      console.error('Error',error);
    }
  );
}


}
