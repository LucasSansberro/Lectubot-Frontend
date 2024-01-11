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
  renderingBooks: Book[] = []
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.paginator!._intl.itemsPerPageLabel="Libros por página";
    this.books = this.dataService.books;
    for (let i = 0; i < 30; i++) {
      this.books.push(this.dataService.book1);
      this.books.push(this.dataService.book2);
      this.books.push(this.dataService.book3);
    }
    this.renderingBooks = this.books.slice(0,18)

  }
  handlePageEvent(event: any) {
    this.renderingBooks = this.books.slice(0,event.pageSize)
  }
  pageIndexEvent(number:any){
    console.log("Hola")
    return 2
  }
}
