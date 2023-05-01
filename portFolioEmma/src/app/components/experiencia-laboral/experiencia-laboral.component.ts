
import { Component, OnInit } from '@angular/core';

import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit  {
  
  experienceList: any;

  constructor(private experienciaPort: ExperienceService) {}
  
  ngOnInit(): void {
    this.experienciaPort.obtenerDatos().subscribe(data => {
      this.experienceList = data;
    })
  }

}

