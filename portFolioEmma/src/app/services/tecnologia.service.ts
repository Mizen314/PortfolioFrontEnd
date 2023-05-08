import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('https://ap-backend-7mxz.onrender.com/api/tecnologia')
  }
}
