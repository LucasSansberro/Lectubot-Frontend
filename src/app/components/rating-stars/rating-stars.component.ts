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
    if (this.stars.length === 0) {
      return;
    }
    const sum = this.stars.reduce((acc, el) => acc + el, 0);
    this.average = sum / this.stars.length;
    for (let i = 0; i < 5; i++) {
      if (numero >= i + 1) {
        // Ícono de estrella completa
        this.starsToRender.push(1);
      } else if (numero > i) {
        // Ícono de media estrella
        this.starsToRender.push(2);
      } else {
        // Ícono de estrella vacía
        this.starsToRender.push(0);
      }
    }
  }
}
