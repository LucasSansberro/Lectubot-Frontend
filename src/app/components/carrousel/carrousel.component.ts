import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Book } from 'src/app/models/Entities/Book';
import { Genre } from 'src/app/models/Enums/Genre';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
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
  @ViewChild('carousel') carousel: ElementRef | undefined;
  autoSlideInterval: any;
  animationState: string = '';
  currentIndex: number = 1;
  transformOffset: number | undefined;
  isAnimationInProgress: boolean = false;
  cardWidth: number = 0;
  books: Book[] = [];
  backgroundColors: string[] = [
    'discord-blue',
    'discord-gray',
    'discord-lightBlack',
    'facebook-lightBlue',
    'discord-black',
    'discord-gray',
    'facebook-blue',
    'discord-black',
    'facebook-cyan',
  ];

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.books = this.dataService.books;
    this.startAutoSlide();
  }
  onCardWidthCalculated(width: number) {
    this.cardWidth = width;
    this.updateCarouselTransform();
  }
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, 10000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  onNextClick() {
    if (this.isAnimationInProgress || this.books.length <= 2) {
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
    if (this.isAnimationInProgress || this.books.length <= 2) {
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
    const gap = 10;
    const totalItemWidth = this.cardWidth + gap;
    this.transformOffset = -(this.currentIndex - 1) * totalItemWidth;
  }

  onAnimationDone() {
    this.animationState = '';
    this.isAnimationInProgress = false;
  }
}
