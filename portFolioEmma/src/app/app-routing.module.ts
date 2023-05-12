import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
