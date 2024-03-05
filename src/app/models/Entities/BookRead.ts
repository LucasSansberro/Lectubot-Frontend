import { BookReadStatus } from '../Enums/BookReadStatus.js';
import { Book } from './Book.js';
import { Review } from './Review.js';

export interface BookRead {
  _id?: string;
  book_id: string | Book;
  user_id: string;
  stars?: number;
  status: BookReadStatus;
  review?: Review;
  started: Date;
  finished?: Date;
}
