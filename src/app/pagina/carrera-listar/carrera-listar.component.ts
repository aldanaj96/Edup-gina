import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/service/carreras.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-carrera-listar',
  templateUrl: './carrera-listar.component.html',
  styleUrls: ['./carrera-listar.component.css']
})
export class CarreraListarComponent implements OnInit {
 
  carreras:any[]=[];

  ngOnInit(): void {
    this.mostrarCarreras();
  }

  constructor(private carrerasService:CarrerasService, 
   private router:Router) {}

   mostrarCarreras():void{
     this.carrerasService.verTotalCarreras().subscribe(
      (data)=>{
        this.carreras=data;
      },
      (error)=>{
        console.error('error al mostrar carreras', error);
      }
     )
   }

  eliminarCarrera(carrera:any):void{
   if(confirm("¿Está seguro que desea eliminar la carrera "+carrera.nombres+"?")){
      this.carrerasService.deleteCarreras(carrera.idcarreras).subscribe(
        (data) => {
         this.mostrarCarreras();
        },
        (error) => {
          console.error('Error al eliminar la carrera',error);
          
        }
      )
   }

  }

  



  @ViewChild('tabla', {static:true}) tabla!:ElementRef;
generarPDF(){
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit:'mm',
    format: [297,210]
  });

  const tabla=this.tabla.nativeElement;

  pdf.html(
    tabla,{
      callback:(pdf)=>{
        pdf.save('listadoCarreras.pdf');
      },
      x:5,
      y:5,
      html2canvas:{
        scale:0.3
      }
    }
  );



}

}


