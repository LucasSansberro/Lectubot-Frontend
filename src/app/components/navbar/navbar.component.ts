import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIResponse } from 'src/app/models/APIResponse';
import { User } from 'src/app/models/Entities/User';
import { UsersService } from 'src/app/services/users.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string = '';
  isUserLogged: boolean = false;

  constructor(
    private userService: UsersService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    if (this.cookieService.check('logged')) {
      this.userService.getLoggedUserData().subscribe({
        next: (response: APIResponse<User>) => {
          if (response.success == true) {
            this.userService.loggedInUser = response.data!;
            const { discordId, avatar } = response.data!;
            this.userService.userProfilePic = `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png`;
            this.userService.isUserLogged = true;
            this.isUserLogged = true;
            this.username = response.data?.username!;
          }
        },
        error: (e: Error) => {
          this.cookieService.delete('logged');
          alert('Error conectando con la base de datos: ' + e.name);
        },
      });
    }
  }

  closeSession(): any {
    this.userService.closeSession();
    this.isUserLogged = false;
    this.username = '';
  }
}
