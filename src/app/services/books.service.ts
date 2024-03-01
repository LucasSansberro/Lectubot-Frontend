import { Injectable } from '@angular/core';
import { APIResponse } from '../models/APIResponse';
import { Book } from '../models/Entities/Book';
import { DataService } from './data.service';
import { BookRead } from '../models/Entities/BookRead';
import { BookReadStatus } from '../models/Enums/BookReadStatus';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  selectedBook!: Book
  constructor(private dataService: DataService) {}

  postBookRead(book: Book): void {
    const bookRead : BookRead = {
      book_id: book._id!,
      status: BookReadStatus.reading,
      started: new Date()
    }
    this.dataService.postBookRead(bookRead).subscribe({
      next: (response: APIResponse<any>) => {
        console.log(response);
      },
      error: (e: Error) => {
        alert(e);
      },
    });
  }
}
