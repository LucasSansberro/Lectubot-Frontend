import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Book } from 'src/app/models/Entities/Book';
import { Genre, genreValueToKeyConversion } from 'src/app/models/Enums/Genre';
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
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSelect) matSelect: any;
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
    } else if (this.genresFilter.length >= 4) {
      alert('No se pueden poner más de cuatro filtros');
    } else {
      this.genresFilter.push(event.value);
      this.applyFilter();
    }
    this.matSelect.value = '';
  }

  removeFilter(genre: string) {
    this.genresFilter = this.genresFilter.filter(
      (genreInArray) => genreInArray != genre
    );
    this.renderingBooks = this.books;
    if (this.genresFilter.length == 0) {
      return;
    } else {
      this.applyFilter();
    }
  }

  applyFilter() {
    const filteredArray: Array<Book[]> = [];
    this.genresFilter.forEach((genre) => {
      const key = genreValueToKeyConversion(genre);
      filteredArray.push(
        this.books.filter((book) => book.genre.includes(Genre[key]))
      );
    });
    this.renderingBooks = [...new Set(filteredArray.flat())];
  }
}
