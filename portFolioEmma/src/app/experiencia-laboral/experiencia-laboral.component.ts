
import { Component, OnInit } from '@angular/core';

import { Experiencia } from './experienciaLaboral';
import { ExperienciaService } from '../services/experiencia.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit  {
  
  experiencias: Experiencia[] = [];

  constructor (private experienciaService: ExperienciaService ){ }
  
  ngOnInit() {
    this.getExperiencias();
  }
  
    getExperiencias(): void {
      this.experienciaService.getExperiencias()
      .subscribe( experiencias => this.experiencias = experiencias);
    }
}

