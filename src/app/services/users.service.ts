import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIResponse } from '../models/APIResponse';
import { User } from '../models/Entities/User';
import { DataService } from './data.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedInUser: User | undefined;
  userProfilePic: string = '';
  private userDataSubject: Subject<User> = new Subject<User>();
  userData$: Observable<User> = this.userDataSubject.asObservable();

  constructor(
    private dataService: DataService,
    private cookieService: CookieService
  ) {}

  getLoggedUserData(): void {
    this.dataService.getLoggedUserData().subscribe({
      next: (response: APIResponse<User>) => {
        console.log(response);
        this.loggedInUser = response.data!;
        const { discordId, avatar } = response.data!;
        this.userProfilePic = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png`;
        this.userDataSubject.next(this.loggedInUser);
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
