import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { Experiencia } from '../../experiencia-laboral/experienciaLaboral'
import { ExperienciaService } from 'src/app/services/experiencia.service';
 

@Component({
  selector: 'app-detalle-experiencia',
  templateUrl: './detalle-experiencia.component.html',
  styleUrls: ['./detalle-experiencia.component.css']
})
export class DetalleExperienciaComponent implements OnInit {
  experiencia: Experiencia | undefined;

  constructor (
    private route: ActivatedRoute,
    private experienciaService:ExperienciaService,
    private location: Location,
  ){}

  ngOnInit(): void {
    this.getExperiencia();
  }
  
  getExperiencia(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.experienciaService.getExperiencia(id).subscribe(experiencia => this.experiencia = experiencia);
  }
   volver(): void {
      this.location.back()
    }

}
