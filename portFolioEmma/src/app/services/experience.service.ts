import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    console.log("funciona serv")
    return this.http.get('https://ap-backend-7mxz.onrender.com/api/experiencia')
  }

  obtenerDatosId(id:number): Observable<any> {
    return this.http.get(`https://ap-backend-7mxz.onrender.com/api/experiencia/id`)
  }

}
