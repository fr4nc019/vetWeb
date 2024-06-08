import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
 

@Injectable({
  providedIn: 'root'
})
export class ServicioAutenticacion {
  constructor(private http: HttpClient) {}

  iniciarSesion(correo: string, contraseña: string) {
    return this.http.post<any>('file:///C:/xampp/htdocs/Veterinaria/register.php', { correo, contraseña });
  }
}