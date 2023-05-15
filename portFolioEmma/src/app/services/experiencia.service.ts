import { Injectable } from '@angular/core';
import { Experiencia } from '../experiencia-laboral/experienciaLaboral';
import { EXPERIENCIA } from '../experiencia-laboral/experiencia-mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor() { }

  getExperiencias(): Observable<Experiencia[]> {
    const experiencias = of (EXPERIENCIA)
    return experiencias; 
  }
  getExperiencia(id:number): Observable<Experiencia> {
    const experiencia = EXPERIENCIA.find(h => h.id === id)!;
    return of(experiencia);
  }

}
