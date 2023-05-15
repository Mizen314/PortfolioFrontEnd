import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './services/guard.guard';
import {ContactoComponent} from './components/contacto/contacto.component'
 
const routes: Routes = [
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'contacto', component: ContactoComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
