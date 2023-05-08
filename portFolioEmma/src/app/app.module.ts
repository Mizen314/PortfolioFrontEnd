import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarraNavComponent } from './components/barra-nav/barra-nav.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AboutMeService } from './services/about-me.service';
import { InterceptorService } from './services/interceptor.service';
import { EstudiosService } from './services/estudios.service';
import { ExperienceService } from './services/experience.service';
import { TecnologiaService } from './services/tecnologia.service';
import { AutenticacionService } from './services/autenticacion.service';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    ExperienciaLaboralComponent,
    DashboardComponent,
    BarraNavComponent,
    AboutMeComponent,
    EstudiosComponent,
    TecnologiaComponent,
    ContactoComponent,
    ContactoFormComponent,
    IniciarSesionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AutenticacionService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
