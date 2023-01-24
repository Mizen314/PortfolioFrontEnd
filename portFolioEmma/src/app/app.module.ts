import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    CarrouselComponent,
    AboutMeComponent,
    ExperienciaLaboralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
