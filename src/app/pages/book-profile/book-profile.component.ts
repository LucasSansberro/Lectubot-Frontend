import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrl: './book-profile.component.css',
})
export class BookProfileComponent implements OnInit {
  book!: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.book = this.dataService.books.find(
        (book) => book._id == params['libro-id']
      )!;
    });
  }
}
