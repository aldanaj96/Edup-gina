import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CarrerasService } from 'src/app/service/carreras.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carrera-cargar',
  templateUrl: './carrera-cargar.component.html',
  styleUrls: ['./carrera-cargar.component.css']
})
export class CarreraCargarComponent implements OnInit {
  carreras={
    
    nombres:'',
   };

  constructor(
    private router : Router,
    private carrerasService:CarrerasService
  ){ }


  crearCarrera(){


    this.carrerasService.insertCarrera(this.carreras)
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
