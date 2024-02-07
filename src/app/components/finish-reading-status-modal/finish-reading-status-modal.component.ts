import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';

const heightTransition = trigger('heightTransition', [
  transition('void => *', [
    style({ 'min-height': '0', height: '0' }),
    animate('0.5s ease-out'),
  ]),
  transition('* => void', [
    animate('0.5s ease-out'),
    style({ 'min-height': '0', height: '0' }),
  ]),
]);

@Component({
  selector: 'app-finish-reading-status-modal',
  templateUrl: './finish-reading-status-modal.component.html',
  styleUrl: './finish-reading-status-modal.component.css',
  animations: [heightTransition],
})
export class FinishReadingStatusModalComponent {
  @ViewChild(RatingStarsComponent) ratingStars!: RatingStarsComponent;
  selectedValue: string = 'no';

  resetRating() {
    this.ratingStars.scoreSelected = false;
    this.ratingStars.userRatingStars = [];
  }
}
