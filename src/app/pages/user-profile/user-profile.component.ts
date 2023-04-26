import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  public username: any = '';
  public image: any = '';
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userService.iniciarSesion().subscribe({
      next: (data: any) => {
        if (data.test != null) {
          this.username = data.test.username;
          this.image = `https://cdn.discordapp.com/avatars/${data.test.discordId}/${data.test.avatar}.png`;
        }
      },
      error: (e: any) => {
        console.log(e);
      },
    });
  }
}
