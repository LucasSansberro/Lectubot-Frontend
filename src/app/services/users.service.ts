import { Injectable } from '@angular/core';
import { User } from '../models/Entities/User';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private loggedInUser: User | undefined;
  private loggedInBoolean: boolean = false;
  constructor(private dataService: DataService) {}

  getLoggedUserData(): any {
    return this.dataService.getLoggedUserData();
  }

  closeSession(): any {
    return this.dataService.closeSession();
  }
}
