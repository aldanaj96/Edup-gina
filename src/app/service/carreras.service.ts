import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http' ;
import { Observable} from 'rxjs' ;


@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  private apiURL='http://localhost/API_Prueba/carreras.php'

  constructor(private http:HttpClient) { }

  //Método para obtener todas las carreras.
 verTotalCarreras():Observable<any>{         //función
  return this.http.get(`${this.apiURL}`);   //servivio
 }

  //Método para obtener carrera por ID
  getCarreraById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}?id=${id}`);
  }

 //Método para eliminar una carrera por ID.
 deleteCarreras(id:number): Observable<any>{
  return this.http.delete(`${this.apiURL}?id=${id}`);
 }

 
//Método para insertar una Carrera
insertCarrera(data: any): Observable<any> {
  return this.http.post(`${this.apiURL}`,data);
}
 

//Método para actualizar una carrera
updateCarrera(id:number,nuevoNombre:string): Observable<any> {
  return this.http.put(`${this.apiURL}`,{idcarreras:id,nombres:nuevoNombre});
}


}
