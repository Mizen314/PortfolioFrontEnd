import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  experienceList: any;

  constructor(private experienciaPort: ExperienceService){}

  ngOnInit(): void {
    this.experienciaPort.obtenerDatos().subscribe(data => {
      this.experienceList = data;
    })
  }


}
