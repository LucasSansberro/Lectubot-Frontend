import { BookRead } from "./BookRead.js";

export interface User {
  _id: string;
  discordId: string;
  username: string;
  avatar: string;
  books: BookRead[];
  createdAt: string;
}
