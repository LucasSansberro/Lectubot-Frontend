import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page-main',
  templateUrl: './home-page-main.component.html',
  styleUrls: ['./home-page-main.component.css'],
})
export class HomePageMainComponent implements OnInit {
  books: Book[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.books = this.dataService.books.slice(0, 3);
  }
}
