import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { DetalleExperienciaComponent } from './components/detalle-experiencia/detalle-experiencia.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    ExperienciaLaboralComponent,
    DetalleExperienciaComponent,
    DashboardComponent,
    BarraNavComponent,
    AboutMeComponent,
    FooterComponent,
    EstudiosComponent,
    TecnologiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
