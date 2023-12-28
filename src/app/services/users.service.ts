import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIResponse } from '../models/APIResponse';
import { User } from '../models/Entities/User';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedInUser: User | undefined;
  userProfilePic: string = '';

  constructor(
    private dataService: DataService,
    private cookieService: CookieService
  ) {}

  getLoggedUserData(): void {
    this.dataService.getLoggedUserData().subscribe({
      next: (response: APIResponse<User>) => {
        this.loggedInUser = response.data!;
        const { discordId, avatar } = response.data!;
        this.userProfilePic = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png`;
      },
      error: (e: Error) => {
        this.cookieService.delete('logged');
        alert('Error conectando con la base de datos: ' + e.name);
      },
    });
  }

  closeSession(): void {
    this.dataService.closeSession().subscribe(() => {
      this.loggedInUser = undefined;
      this.userProfilePic = '';
    });
  }
}
