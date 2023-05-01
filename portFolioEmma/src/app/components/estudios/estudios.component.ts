import { Component, OnInit } from '@angular/core';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
    estudiosList?: any = [] ;
    
    constructor(private estudiosPort: EstudiosService) {}
    
    ngOnInit(): void {
      this.estudiosPort.obtenerDatos().subscribe(estudios => {
        this.estudiosList = estudios;
      })
    }
  
  }

