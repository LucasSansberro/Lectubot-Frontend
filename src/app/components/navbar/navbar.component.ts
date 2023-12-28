import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(
    private userService: UsersService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    if (this.cookieService.check('logged')) {
      this.username = this.userService.loggedInUser!.username;
    }
  }

  closeSession(): void {
    this.userService.closeSession();
    this.username = '';
  }

  searchUserInput(event: Event): string {
    return (event.target as HTMLInputElement)?.value;
  }
}
