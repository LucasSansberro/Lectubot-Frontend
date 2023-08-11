import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page-sidebar',
  templateUrl: './home-page-sidebar.component.html',
  styleUrls: ['./home-page-sidebar.component.css'],
})
export class HomePageSidebarComponent implements OnInit {
  books: Book[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.books = this.dataService.books.slice(0, 3);
  }
}
