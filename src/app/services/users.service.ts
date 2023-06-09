import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/APIResponse';
import { User } from '../models/Entities/User';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedInUser: User | undefined;
  isUserLogged: boolean = false;
  userProfilePic: string = '';

  constructor(private dataService: DataService) {}

  getLoggedUserData(): Observable<APIResponse<User>> {
    return this.dataService.getLoggedUserData();
  }

  closeSession(): void {
    this.dataService.closeSession().subscribe(() => {
      this.loggedInUser = undefined;
      this.isUserLogged = false;
      this.userProfilePic = ""
    });
  }
}
