import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  books: Book[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.books = this.dataService.books;
    this.books.push(this.dataService.book1);
    this.books.push(this.dataService.book2);
    this.books.push(this.dataService.book3);
    this.books.push(this.dataService.book1);
    this.books.push(this.dataService.book2);
    this.books.push(this.dataService.book3);
    this.books.push(this.dataService.book1);
    this.books.push(this.dataService.book2);
    this.books.push(this.dataService.book3);
    this.books.push(this.dataService.book1);
    this.books.push(this.dataService.book2);
    this.books.push(this.dataService.book3);
    this.books.push(this.dataService.book1);
    this.books.push(this.dataService.book2);
    this.books.push(this.dataService.book3);
    this.books.push(this.dataService.book1);
    this.books.push(this.dataService.book2);
    this.books.push(this.dataService.book3);
    this.paginator!._intl.itemsPerPageLabel="Libros por página";
  }
  handlePageEvent(event: any) {
    console.log('hola');
  }
}
