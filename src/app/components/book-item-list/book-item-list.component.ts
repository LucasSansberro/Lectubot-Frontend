import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrl: './book-item-list.component.css'
})
export class BookItemListComponent {
@Input() book! : Book
}
