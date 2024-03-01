import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrl: './filter-selector.component.css',
})
export class FilterSelectorComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() optionsList: string[] = [];
  @Input() column: boolean = false;
  @Input() filterLimit: number = 4;
  @Output() filterArrayEmmitter: EventEmitter<string[]> = new EventEmitter();
  @ViewChild(MatInput) filterInput!: MatInput;
  selectedOptions: string[] = [];
  optionsToRender: string[] = [];

  ngOnInit() {
    this.optionsToRender = this.optionsList;
  }

  removeSelectedOption(toBeRemovedElement: string) {
    this.selectedOptions = this.selectedOptions.filter(
      (element) => element != toBeRemovedElement
    );
    this.filterArrayEmmitter.emit(this.selectedOptions);
  }

  selectOption(event: string) {
    if (this.selectedOptions.includes(event)) {
      Swal.fire('Error', `Ya se ha seleccionado ${event}`, 'error');
    } else if (this.selectedOptions.length >= this.filterLimit) {
      Swal.fire(
        'Error',
        this.selectedOptions.length == 1
          ? 'No se puede seleccionar más de una opción'
          : `No se pueden seleccionar más ${this.filterLimit} de opciones`,
        'error'
      );
    } else {
      this.selectedOptions.push(event);
      this.filterArrayEmmitter.emit(this.selectedOptions);
    }
    this.filterInput.value = '';
  }

  filterAutoComplete(event: any) {
    event.value.toLowerCase() == ''
      ? (this.optionsToRender = this.optionsList)
      : (this.optionsToRender = this.optionsList.filter((option) =>
          option.toLowerCase().includes(event.value.toLowerCase())
        ));
  }
}
