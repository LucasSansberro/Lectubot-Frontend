import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Genre } from 'src/app/models/Enums/Genre';
@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrl: './add-book-modal.component.css',
})
export class AddBookModalComponent {
  formulario: FormGroup;
  selectedGenres: string[] = [];
  @Input() genres: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.genres = Object.values(Genre);

    this.formulario = this.formBuilder.group({
      title: ['', Validators.required],
      cover: ['', Validators.required],
      author: ['', Validators.required],
      pages:  ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(1)]],
      readByGroup: ['', Validators.required],
      synopsis: ['', Validators.required],
      genre: [''],
    });
  }

  agregarLibro() {
    if (this.formulario.valid) {
      const nuevoLibro = this.formulario.value;
      console.log(nuevoLibro);
    }
  }
  applyFilter(event: string[]) {
    this.selectedGenres = event;
    this.formulario.get('genre')!.setValue(this.selectedGenres);
  }

  setMonthAndYear(event: string, picker: MatDatepicker<any>) {
    this.formulario.get('readByGroup')!.setValue(event);
    picker.close();
  }
}
