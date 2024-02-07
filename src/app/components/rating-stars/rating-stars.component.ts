import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css',
})
export class RatingStarsComponent implements OnInit{
  @Input() stars: number[] = [];
  @Input() static: boolean = true;
  average: number = 0;
  starsToRender: number[] = [];
  userRatingStars: number[] = [];
  scoreSelected: boolean = false;
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

  userRating(index: number) {
    if (!this.scoreSelected) {
      this.userRatingStars = new Array(index + 1).fill(1, 0, index + 1);
      if (this.userRatingStars.length < 5) {
        for (let i = this.userRatingStars.length; i < 5; i++) {
          this.userRatingStars.push(0);
        }
      }
    }
  }

  setScore(index: number) {
    this.scoreSelected = false;
    this.userRating(index);
    this.scoreSelected = true;
  }

  resetStarRating() {
    !this.scoreSelected ? (this.userRatingStars = []) : '';
  }
}
