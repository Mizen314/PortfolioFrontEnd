import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  uri = 'http://localhost:3000/api'; // la url que corresponda para cada caso

  token: any;

  constructor ( private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.uri + '/autenticate', {email: email, password: password})
    .subscribe((resp: any) => {
      //redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      //guardamos el token en el localStorage
      localStorage.setItem('auth_token', resp.token);
    })
    
  };

  // Para cerrar sesion eliminamos el token del localStorage

  logout () {
    localStorage.removeItem('token');
  }

  // Un servicio para verificar siu existe la sesión
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
