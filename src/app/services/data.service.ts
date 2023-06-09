import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/APIResponse';
import { User } from '../models/Entities/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //TODO Make it an env
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  getLoggedUserData(): Observable<APIResponse<User>> {
   return this.http.get<APIResponse<User>>(`${this.URL}/users/me`, { withCredentials: true });
  }

  //TODO Shouldn't it be a post req?
  closeSession(): Observable<void>{
    return this.http.get<void>(`${this.URL}/auth/logout`, { withCredentials: true });
  }
}
