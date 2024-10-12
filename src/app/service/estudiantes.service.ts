import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http' ;
import { Observable} from 'rxjs' ;


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
   private apiEstURL='http://localhost/API_Prueba/estudiantes.php';
  constructor(private http:HttpClient) { }


   //Método para obtener estudiantes.
  verTotalEstudiantes():Observable<any>{
    return this.http.get(`${this.apiEstURL}`);
  }
   
  //Método para obtener estudiantes por ID
  getEstudiantesById(id: number): Observable<any> {
    return this.http.get(`${this.apiEstURL}?id=${id}`);
  } 

  
   //Método para eliminar una estudiante por ID.
   deleteEstudiantes(id:number): Observable<any>{
    return this.http.delete(`${this.apiEstURL}?id=${id}`);
   }

   
     //Método para insertar estudiantes
    insertEstudiantes(data: any): Observable<any> {
    return this.http.post(`${this.apiEstURL}`,data);
    }
   
     //Método para actualizar estudiantes
     updateEstudiantes(  id: any, nuevoNom: any, nuevoAp: any, nuevoDNI: any, nuevoTel: any, nuevoEm: any ): Observable<any> {
     return this.http.put(`${this.apiEstURL}`,{idestudiantes:id,nombre:nuevoNom,apellido:nuevoAp,dni:nuevoDNI,telefono:nuevoTel,email:nuevoEm});
  }

}
