import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private autenticationsService: AutenticacionService,
    private ruta: Router
    ) {
    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(5)]],
      password:['',[Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {}


get Username()
{
  return this.form.get('username');
}

get Password() 
{
  return this.form.get('password');
}


onEnviar(event: Event){
  event.preventDefault;
  this.autenticationsService.IniciarSesion(this.form.value).subscribe(data =>{
    console.log("DATA:" + JSON.stringify(data))
    this.ruta.navigate(['dashboard']);
  });
    
}


}