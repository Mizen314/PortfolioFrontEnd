import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  url:string ="http://localhost:8081/api/persona/1"

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.url)
  }
}
