import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Genre, genreConversion } from 'src/app/models/Enums/Genre';

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
    this.renderBooks();
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.renderBooks();
  }

  renderBooks() {
    this.renderingBooks = this.books.slice(
      this.pageIndex * this.pageSize,
      (this.pageIndex + 1) * this.pageSize
    );
  }

  addFilter(event: MatSelectChange) {
    if (this.genresFilter.includes(event.value)) {
      alert('Ya se está filtrando por ese género');
      return;
    }
    if (this.genresFilter.length >= 4) {
      alert('No se pueden poner más de cuatro filtros');
    } else {
      this.genresFilter.push(event.value);
      this.applyFilter()
    }
  }

  removeFilter(genre: string) {
    this.genresFilter = this.genresFilter.filter(
      (genreInArray) => genreInArray != genre
    );
  }

  applyFilter() {
    this.genresFilter.forEach((genre) => console.log(genreConversion(genre)));
  }
}
