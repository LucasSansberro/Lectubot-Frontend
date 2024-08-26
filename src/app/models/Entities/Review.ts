export interface Review {
  _id?: string;
  user_id: string;
  book_id: string;
  content: String;
  likes: number;
}
