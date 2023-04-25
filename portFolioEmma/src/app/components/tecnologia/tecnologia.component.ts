import { Component, OnInit } from '@angular/core';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  tecnologiaList: any;
  
  constructor(private tecnologiaPort: TecnologiaService) {}
  
  ngOnInit(): void {
    this.tecnologiaPort.obtenerDatos().subscribe(data => {
      this.tecnologiaList = data;
    })
  }
}
