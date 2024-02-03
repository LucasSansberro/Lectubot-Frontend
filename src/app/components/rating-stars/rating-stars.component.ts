import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css',
})
export class RatingStarsComponent implements OnInit {
  @Input() stars: number[] = [];
  average: number = 0;
  starsToRender: number[] = [];

  ngOnInit(): void {
    this.stars.length > 0 && this.calculateAverageAndRenderStars();
  }

  calculateAverageAndRenderStars() {
    const sum = this.stars.reduce((acc, el) => acc + el, 0);
    this.average = sum / this.stars.length;
    for (let i = 0; i < 5; i++) {
      if (this.average >= i + 1) {
        this.starsToRender.push(1);
      } else if (this.average < i + 1 && this.average > i) {
        if (this.average - i >= 0.5) {
          this.starsToRender.push(2);
        } else {
          this.starsToRender.push(0);
        }
      } else {
        this.starsToRender.push(0);
      }
    }
  }
}
