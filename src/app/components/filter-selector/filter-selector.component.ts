import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatSelect, MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrl: './filter-selector.component.css',
})
export class FilterSelectorComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() optionsInSelect: string[] = [];
  @Input() column: boolean = false;
  @Input() filterLimit: number = 4;
  @Output() filterArrayEmmitter: EventEmitter<string[]> = new EventEmitter();
  selectedItemsArray: string[] = [];
  @ViewChild(MatInput) filterInput!: MatInput;
  optionsToRender: string[] = [];

  ngOnInit() {
    this.optionsToRender = this.optionsInSelect;
  }

  removeFilter(toBeRemovedElement: string) {
    this.selectedItemsArray = this.selectedItemsArray.filter(
      (element) => element != toBeRemovedElement
    );
    this.filterArrayEmmitter.emit(this.selectedItemsArray);
  }

  addFilter(event: string) {
    if (this.selectedItemsArray.includes(event)) {
      alert('Ya se está filtrando por ' + event);
    } else if (this.selectedItemsArray.length >= this.filterLimit) {
      alert(`No se pueden seleccionar más ${this.filterLimit} de opciones`);
    } else {
      this.selectedItemsArray.push(event);
      this.filterArrayEmmitter.emit(this.selectedItemsArray);
    }
    this.filterInput.value = '';
    this.optionsToRender = this.optionsInSelect;
  }

  filterAutoComplete(event: any) {
    event.value.toLowerCase() == ''
      ? (this.optionsToRender = this.optionsInSelect)
      : (this.optionsToRender = this.optionsInSelect.filter((option) =>
          option.toLowerCase().includes(event.value)
        ));
  }
}
