import { Component, OnInit } from '@angular/core';
import { BookRead } from 'src/app/models/Entities/BookRead';
import { User } from 'src/app/models/Entities/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  username: string = '';
  profilePic: string = '';
  booksRead: BookRead[] = [];
  dateOfCreation: string = '';
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.loggedInUser == null
      ? this.getDataFromDB()
      : this.getDataFromMemory();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${
      month < 10 ? '0' + month : month
    }/${year}`;
  }

  getDataFromDB() {
    this.userService.userData$.subscribe((userData: User) => {
      this.username = userData.username;
      this.profilePic = `https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`;
      this.dateOfCreation = this.formatDate(userData.createdAt);
      this.booksRead = userData.books!;
    });
  }
  getDataFromMemory() {
    this.username = this.userService.loggedInUser?.username!;
    this.profilePic = this.userService.userProfilePic;
    this.dateOfCreation = this.formatDate(
      this.userService.loggedInUser!.createdAt
    );
    this.booksRead = this.userService.loggedInUser?.books!;
  }
}
