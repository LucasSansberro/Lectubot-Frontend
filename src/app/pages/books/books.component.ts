import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

interface PageEvent {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator:
    | MatPaginator
    | undefined;
  books: Book[] = [];
  renderingBooks: Book[] = [];
  pageIndex: number = 0;
  pageSize: number = 18;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.paginator!._intl.itemsPerPageLabel = 'Libros por página';
    this.books = this.dataService.books;
    for (let i = 0; i < 30; i++) {
      this.books.push(this.dataService.book1);
      this.books.push(this.dataService.book2);
      this.books.push(this.dataService.book3);
    }
    this.renderingBooks = this.renderBooks(this.pageIndex, this.pageSize);
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.renderingBooks = this.renderBooks(this.pageIndex, this.pageSize);
  }

  renderBooks(pageIndex: number, pageSize: number): Book[] {
    return this.books.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }
}
