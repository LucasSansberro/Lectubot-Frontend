import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Genre } from 'src/app/models/Enums/Genre';

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
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  books: Book[] = [];
  renderingBooks: Book[] = [];
  pageIndex: number = 0;
  pageSize: number = 18;
  selected: any;
  genres: string[] = [];
  genresFilter: string[] = [];

  constructor(private dataService: DataService) {
    this.genres = Object.values(Genre);
  }

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
  test(event: MatSelectChange) {
    this.genresFilter.push(event.value);
  }
  remove(genre: string) {
    this.genresFilter = this.genresFilter.filter(
      (genreInArray) => genreInArray != genre
    );
  }
}
