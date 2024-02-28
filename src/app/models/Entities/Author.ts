import { Genre } from "../Enums/Genre.js";
import { Book } from "./Book.js";

export interface Author {
  _id?: string;
  name: string;
  image: string;
  nationality: string;
  genre: Genre[];
  books?: Book[];
}
