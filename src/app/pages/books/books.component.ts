import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.books = this.dataService.books;
    this.books.push(this.dataService.book1)
    this.books.push(this.dataService.book2)
    this.books.push(this.dataService.book3)
    this.books.push(this.dataService.book1)
    this.books.push(this.dataService.book2)
    this.books.push(this.dataService.book3)
    this.books.push(this.dataService.book1)
    this.books.push(this.dataService.book2)
    this.books.push(this.dataService.book3)
    this.books.push(this.dataService.book1)
    this.books.push(this.dataService.book2)
    this.books.push(this.dataService.book3)
  }
}
