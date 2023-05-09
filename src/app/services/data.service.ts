import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //TODO Make it an env
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  getLoggedUserData(): any {
   return this.http.get(`${this.URL}/users/me`, { withCredentials: true });
  }

  //TODO Shouldn't it be a post req?
  closeSession(): any{
    return this.http.get(`${this.URL}/auth/logout`, { withCredentials: true });
  }
}
