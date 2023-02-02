import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../experiencia-laboral/experienciaLaboral';
import { ExperienciaService } from 'src/app/services/experiencia.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService){}

  ngOnInit(): void {
      this.getExperiencias();
  }

  getExperiencias(): void {
    this.experienciaService.getExperiencias()
    .subscribe(experiencias => this.experiencias)


}
}
