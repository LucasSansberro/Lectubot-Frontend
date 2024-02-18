import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrl: './filter-selector.component.css',
})
export class FilterSelectorComponent {
  @ViewChild(MatSelect) matSelect: any;
  @Input() optionsInSelect: string[] = [];
  @Input() column: boolean = false;
  @Input() filterLimit: number = 4;
  @Output() filterArrayEmmitter: EventEmitter<string[]> = new EventEmitter();
  selectedItemsArray: string[] = [];

  removeFilter(toBeRemovedElement: string) {
    this.selectedItemsArray = this.selectedItemsArray.filter(
      (element) => element != toBeRemovedElement
    );
    this.filterArrayEmmitter.emit(this.selectedItemsArray);
  }

  addFilter(event: MatSelectChange) {
    if (this.selectedItemsArray.includes(event.value)) {
      alert('Ya se está filtrando por ' + event.value);
    } else if (this.selectedItemsArray.length >= this.filterLimit) {
      alert(`No se pueden poner más ${this.filterLimit} de filtros`);
    } else {
      this.selectedItemsArray.push(event.value);
      this.filterArrayEmmitter.emit(this.selectedItemsArray);
    }
    this.matSelect.value = '';
  }
}
