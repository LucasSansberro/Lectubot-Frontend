import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @ViewChild('closeButton') closeButton!: ElementRef;
  addAuthorForm: FormGroup;
  genres: string[] = [];
  selectedGenres: string[] = [];

  constructor(
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
        next: () => {
          (this.closeButton.nativeElement as HTMLElement).click(),
            Swal.fire({
              title: 'Autor agregado',
              text: `${newAuthor.name} se agregó exitosamente a la base de datos`,
              icon: 'success',
            }),
            this.dataService.authorsName.push(newAuthor.name);
        },
      });
    }
  }
  addGenreToForm(event: string[]) {
    this.selectedGenres = event;
    this.addAuthorForm.get('genre')!.setValue(this.selectedGenres);
  }
}
