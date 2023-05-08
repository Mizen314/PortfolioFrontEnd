import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  miPersona?: any;

  constructor(private datosPersona: AboutMeService ) {
  }

  ngOnInit(): void {
      this.datosPersona.obtenerDatos().subscribe(data => {
        console.log(JSON.stringify(data))
        this.miPersona = data;
  });

}
}
