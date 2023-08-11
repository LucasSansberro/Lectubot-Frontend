import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Book } from 'src/app/models/Entities/Book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('carouselAnimation', [
      transition('* => next, * => prev', [
        style({ transform: 'translateX({{ startOffset }}px)' }),
        animate(
          '500ms ease-in-out',
          style({ transform: 'translateX({{ endOffset }}px)' })
        ),
      ]),
    ]),
  ],
})
export class CarrouselComponent implements OnInit {
  autoSlideInterval: any;
  animationState: string = '';
  currentIndex: number = 1;
  transformOffset: number = 0;
  isAnimationInProgress: boolean = false;
  cardWidth: number = 0;
  books: Book[] = [];
  backgroundColors: string[] = [];
  startOffset: number = 0;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.books = this.dataService.books;
    this.backgroundColors = this.dataService.backgroundColors;
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
      this.cdr.detectChanges();
    }, 10000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
  onCardWidthCalculated(width: number) {
    this.cardWidth = width;
    this.updateCarouselTransform();
  }
  onNextClick() {
    if (this.isAnimationInProgress || this.books.length == 1) {
      return;
    }
    this.isAnimationInProgress = true;
    this.animationState = 'next';
    this.currentIndex = (this.currentIndex + 1) % this.books.length;
    this.updateCarouselTransform();
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  onPrevClick() {
    if (this.isAnimationInProgress || this.books.length == 1) {
      return;
    }
    this.isAnimationInProgress = true;
    this.animationState = 'prev';
    this.currentIndex =
      (this.currentIndex - 1 + this.books.length) % this.books.length;
    this.updateCarouselTransform();
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  updateCarouselTransform() {
    this.startOffset = this.transformOffset;
    const gap = 10;
    const totalItemWidth = this.cardWidth + gap;
    this.transformOffset = -(this.currentIndex - 1) * totalItemWidth;
  }

  onAnimationDone() {
    this.animationState = '';
    this.isAnimationInProgress = false;
  }
}
