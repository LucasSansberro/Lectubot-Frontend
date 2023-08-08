import { Genre } from "../Enums/Genre.js";
import { Review } from "./Review.js";

export interface Book {
  _id: string;
  title: string;
  author: {
    _id: string;
    name: string;
  };
  pages: number;
  genre: Genre[];
  cover: string;
  synopsis: string;
  readByGroup:Date
  stars?: number[];
  reviews?: Review[];
}
