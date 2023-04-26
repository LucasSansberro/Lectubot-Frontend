import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  iniciarSesion(): any {
   return this.http.get(`${this.URL}`, { withCredentials: true });
  }

  cerrarSesion(): any{
    return this.http.get(`${this.URL}/auth/logout`, { withCredentials: true });
  }

}
