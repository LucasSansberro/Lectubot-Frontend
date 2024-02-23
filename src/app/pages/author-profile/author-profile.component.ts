import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/Entities/Author';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrl: './author-profile.component.css',
})
export class AuthorProfileComponent implements OnInit {
  @Input() author!: Author;
  books: Book[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.author = this.dataService.authors.find(
        (author) => author._id == params['autor-id']
      )!;
      this.books = this.dataService.books.filter(
        (book) => book.author._id == params['autor-id']
      );
    });
  }
}
