import { BookReadStatus } from "../Enums/BookReadStatus.js";
import { Genre } from "../Enums/Genre.js";
import { Review } from "./Review.js";

export interface BookRead {
  _id: string;
  title: string;
  author: {
    _id: string;
    name: string;
  };
  pages: number;
  genre: Genre[];
  stars?: number;
  status: BookReadStatus;
  cover: string;
  review?: Review;
  started: Date;
  finished?: Date;
}
