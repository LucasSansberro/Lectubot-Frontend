import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genre } from 'src/app/models/Enums/Genre';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrl: './add-book-modal.component.css',
})
export class AddBookModalComponent {
  formulario: FormGroup;
  @Input() genres: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.genres = Object.values(Genre);

    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.required],
      portada: ['', Validators.required],
      autor: ['', Validators.required],
      cantidadPaginas: ['', Validators.required],
      leidoPorElGrupo: ['', Validators.required],
      sinopsis: ['', Validators.required],
    });
  }

  agregarLibro() {
    if (this.formulario.valid) {
      const nuevoLibro = this.formulario.value;
      console.log(nuevoLibro);
    }
  }

}
