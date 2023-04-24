import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { ExperienciaService } from './services/experiencia.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetalleExperienciaComponent } from './components/detalle-experiencia/detalle-experiencia.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'experiencias', component: ExperienciaLaboralComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: DetalleExperienciaComponent},
  {path: 'carrousel', component: CarrouselComponent},

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
