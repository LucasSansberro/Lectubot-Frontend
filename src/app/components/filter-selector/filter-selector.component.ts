import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Genre } from 'src/app/models/Enums/Genre';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrl: './filter-selector.component.css',
})
export class FilterSelectorComponent {
  @Input() filterArray: string[] = [];
  @Output() filterArrayEmmitter: EventEmitter<string[]> = new EventEmitter();
  genres: string[] = [];

  constructor() {
    this.genres = Object.values(Genre);
  }

  removeFilter(genre: string) {
    console.log(genre);
    /*  this.filterArray = this.filterArray.filter(
      (genreInArray) => genreInArray != genre
    );
    this.filterArrayEmmitter.emit(this.filterArray); */
  }

  addFilter(event: MatSelectChange) {
    /*   if (this.genresFilter.includes(event.value)) {
      alert('Ya se está filtrando por ese género');
    } else if (this.genresFilter.length >= 4) {
      alert('No se pueden poner más de cuatro filtros');
    } else {
      this.genresFilter.push(event.value);
      this.applyFilter();
    }
    this.matSelect.value = ''; */
  }
}
