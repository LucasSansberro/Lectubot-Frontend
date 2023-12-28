import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private cookieService: CookieService,
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    if (this.cookieService.check('logged')) {
      this.userService.getLoggedUserData()
    }
  }
}
