import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-home-page-sidebar',
  templateUrl: './home-page-sidebar.component.html',
  styleUrls: ['./home-page-sidebar.component.css'],
})
export class HomePageSidebarComponent {
  @Input() books: Book[] = [];
}
