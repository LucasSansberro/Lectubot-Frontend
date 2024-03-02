import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrl: './book-review.component.css'
})
export class BookReviewComponent {
@Input() review : string | undefined
@Input() reviewOwner : string | undefined
}
