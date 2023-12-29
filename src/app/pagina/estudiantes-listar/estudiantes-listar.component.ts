import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/service/estudiantes.service';


@Component({
  selector: 'app-estudiantes-listar',
  templateUrl: './estudiantes-listar.component.html',
  styleUrls: ['./estudiantes-listar.component.css']
})
export class EstudiantesListarComponent implements OnInit {

  estudiantes:any[]=[];

ngOnInit(): void {
  this.mostrarEstudiantes();
}

constructor(private estudiantesservice:EstudiantesService,
  private router:Router){}


  mostrarEstudiantes():void{
   this.estudiantesservice.verTotalEstudiantes().subscribe(
    (data)=>{
      this.estudiantes=data;
    },
     (error)=>{
      console.error('error al mostrar estudiantes', error);
     }

   )
  }


  eliminarEstudiantes(estudiantes:any):void{
    if(confirm("¿Está seguro que desea eliminar ** "+estudiantes.nombre+"?")){
       this.estudiantesservice.deleteEstudiantes(estudiantes.nombre).subscribe(
         (data) => {
          this.mostrarEstudiantes();
         },
         (error) => {
           console.error('Error al eliminar **',error);
           
         }
       )
    }
  }

}