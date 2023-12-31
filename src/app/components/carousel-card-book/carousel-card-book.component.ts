import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Book } from 'src/app/models/Entities/Book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carousel-card-book',
  templateUrl: './carousel-card-book.component.html',
  styleUrls: ['./carousel-card-book.component.css'],
})
export class CarouselCardBookComponent implements OnInit {
  @Input() book!: Book;
  @Input() backgroundColor: string = '';
  @Output() itemWidthCalculated = new EventEmitter<number>();
  resizeSubject: Subject<void> = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.calculateCardWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeSubject.next();
    this.resizeSubject.pipe(debounceTime(300)).subscribe(() => {
      this.calculateCardWidth();
    });
  }

  private calculateCardWidth(): void {
    const cardElement = document.querySelector('.book-card');
    if (cardElement) {
      const cardWidth = cardElement.clientWidth;
      this.itemWidthCalculated.emit(cardWidth);
    }
  }

  redirectToBookPage(bookId : string) {
    this.router.navigate(['/libro', bookId])
  }
}
