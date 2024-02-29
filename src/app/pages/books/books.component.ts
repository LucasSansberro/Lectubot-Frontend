import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { AddBookModalComponent } from 'src/app/components/add-book-modal/add-book-modal.component';
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
  books: Book[] = [];
  renderingBooks: Book[] = [];
  pageIndex: number = 0;
  pageSize: number = 18;
  genres: string[] = [];
  value: string = '';

  constructor(private dataService: DataService, private dialog: MatDialog) {
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

  applyFilter(event: string[]) {
    if (event.length == 0) {
      this.renderingBooks = this.books;
    } else {
      const filteredArray: Array<Book[]> = [];
      event.forEach((genre) => {
        const key = genreValueToKeyConversion(genre);
        filteredArray.push(
          this.books.filter((book) => book.genre.includes(Genre[key]))
        );
      });
      this.renderingBooks = [...new Set(filteredArray.flat())];
    }
  }

  searchByTitle(event: Event) {
    const searchedInput = (event.target as HTMLInputElement)?.value;
    this.renderingBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(searchedInput.toLowerCase())
    );
  }
  openAddBookModal() {
    this.dialog.open(AddBookModalComponent);
  }
}
