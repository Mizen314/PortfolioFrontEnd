import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    console.log("El servicio esta corriendo")
    return this.http.get('http://localhost:8081/api/estudio')
  }
}