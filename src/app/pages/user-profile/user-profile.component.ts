import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { BookRead } from 'src/app/models/Entities/BookRead';
import { User } from 'src/app/models/Entities/User';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  username: string = '';
  profilePic: string = '';
  booksRead: Book[] = [];
  booksInReadingStatus: Book[] = [];
  dateOfCreation: string = '';
  constructor(
    private userService: UsersService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.userService.loggedInUser == null
      ? this.getUserDataFromDB()
      : this.getUserDataFromMemory();
    this.getBooksRead();
    this.loadBooksInReadingStatus();
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

  getBooksRead() {
    this.dataService.getBooksReadByValue('user', 'ownUser').subscribe({
      next: (resp) => {
        this.booksRead = resp.data!.map((book) => book.book_id as Book);
      },
    });
  }

  getUserDataFromDB() {
    this.userService.userData$.subscribe((userData: User) => {
      this.username = userData.username;
      this.profilePic = `https://cdn.discordapp.com/avatars/${userData.discordId}/${userData.avatar}.png`;
      this.dateOfCreation = this.formatDate(userData.createdAt);
    });
  }

  getUserDataFromMemory() {
    this.username = this.userService.loggedInUser?.username!;
    this.profilePic = this.userService.userProfilePic;
    this.dateOfCreation = this.formatDate(
      this.userService.loggedInUser!.createdAt
    );
  }

  loadBooksInReadingStatus() {
    if (this.userService.booksInReadingStatus.length == 0) {
      this.userService.booksInReadingData$.subscribe(
        (booksInReading: BookRead[]) => {
          this.booksInReadingStatus = booksInReading.map(
            (book) => book.book_id as Book
          );
        }
      );
    } else {
      this.booksInReadingStatus = this.userService.booksInReadingStatus.map(
        (book) => book.book_id as Book
      );
    }
  }

  isBookInReadingStatus(book: Book): boolean {
    return this.booksInReadingStatus.some((b) => b._id === book._id);
  }
}
