import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIResponse } from '../models/APIResponse';
import { User } from '../models/Entities/User';
import { DataService } from './data.service';
import { Observable, Subject } from 'rxjs';
import { BookRead } from '../models/Entities/BookRead';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedInUser: User | undefined;
  userProfilePic: string = '';
  userDataSubject: Subject<User> = new Subject<User>();
  userData$: Observable<User> = this.userDataSubject.asObservable();
  booksReadByUser: BookRead[] = [];

  constructor(
    private dataService: DataService,
    private cookieService: CookieService
  ) {}

  getLoggedUserData(): void {
    forkJoin({
      userData: this.dataService.getLoggedUserData(),
      booksRead: this.dataService.getOwnBooksRead()
    }).subscribe({
      next: (responses: { userData: APIResponse<User>, booksRead: APIResponse<BookRead[]> }) => {
        console.log(responses)
        const userDataResponse = responses.userData;
        this.loggedInUser = userDataResponse.data!;
        const { discordId, avatar } = userDataResponse.data!;
        this.userProfilePic = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png`;
        this.userDataSubject.next(this.loggedInUser);

        const booksReadResponse = responses.booksRead;
        this.booksReadByUser = booksReadResponse.data!;
      },
      error: (e: Error) => {
        this.cookieService.delete('logged');
        alert('Error conectando con la base de datos: ' + e.name);
      }
    });
  }

  closeSession(): void {
    this.dataService.closeSession().subscribe(() => {
      this.loggedInUser = undefined;
      this.userProfilePic = '';
    });
  }
}
