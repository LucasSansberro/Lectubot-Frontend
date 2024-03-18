import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { BookRead } from 'src/app/models/Entities/BookRead';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  booksInReadingStatus: Book[] = [];
  constructor(
    private dataService: DataService,
    private userService: UsersService
  ) {}
  ngOnInit() {
    this.dataService.getBooks().subscribe({
      next: (resp) => {
        //TODO Refactor para que incluya algunas lecturas y no todas las de la DB
        this.books = resp.data!;
      },
    });
    this.loadBooksInReadingStatus();
  }

  loadBooksInReadingStatus() {
    if (this.userService.booksInReadingStatus.length == 0) {
      this.userService.booksInReadingData$.subscribe(
        (booksInReadingData: BookRead[]) => {
          this.booksInReadingStatus = booksInReadingData.map(
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
}
