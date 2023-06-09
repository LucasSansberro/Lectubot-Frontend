import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  public username: string = '';
  public image: string = '';

  constructor(private userService: UsersService) {
    this.username = this.userService.loggedInUser?.username!
    this.image= this.userService.userProfilePic
  }
}
