import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { ExperienceService } from './services/experience.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'experiencias', component: ExperienciaLaboralComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'carrousel', component: CarrouselComponent}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
