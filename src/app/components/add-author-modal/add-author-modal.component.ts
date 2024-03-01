import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Author } from 'src/app/models/Entities/Author';
import { Genre } from 'src/app/models/Enums/Genre';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrl: './add-author-modal.component.css',
})
export class AddAuthorModalComponent {
  addAuthorForm: FormGroup;
  genres: string[] = [];
  selectedGenres: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddAuthorModalComponent>,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.genres = Object.values(Genre);
    this.addAuthorForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      nationality: ['', Validators.required],
      genre: [''],
    });
  }

  addAuthor() {
    if (this.addAuthorForm.valid) {
      const newAuthor: Author = this.addAuthorForm.value;
      this.dataService.postAuthor(newAuthor).subscribe({
        next: (resp) => {
          Swal.fire(
            'Autor agregado',
            `${newAuthor.name} se agregó exitosamente a la base de datos`,
            'success'
          ),
            this.dataService.authorsNameAndIdList.push(resp.data!);
          this.closeModal();
        },
        error: (resp) => {
          Swal.fire(
            'Error',
            `Ocurrió un error al agregar a ${newAuthor.name} a la base de datos. ${resp.error}`,
            'error'
          );
        },
      });
    }
  }
  addGenreToForm(event: string[]) {
    this.selectedGenres = event;
    this.addAuthorForm.get('genre')!.setValue(this.selectedGenres);
  }
  closeModal() {
    this.dialogRef.close();
  }
}
