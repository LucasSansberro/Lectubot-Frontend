import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Author } from 'src/app/models/Entities/Author';
import { Book } from 'src/app/models/Entities/Book';
import { Genre } from 'src/app/models/Enums/Genre';
import { DataService } from 'src/app/services/data.service';
import { AddAuthorModalComponent } from '../add-author-modal/add-author-modal.component';
import Swal from 'sweetalert2';

const numberValidator = Validators.pattern(/^[0-9]+$/);
const minValidator = Validators.min(1);
@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrl: './add-book-modal.component.css',
})
export class AddBookModalComponent implements OnInit {
  @Input() genres: string[] = [];
  addBookForm: FormGroup;
  authorsNameList: string[] = [];
  selectedGenres: string[] = [];
  selectedAuthor!: Author;

  constructor(
    private dialogRef: MatDialogRef<AddBookModalComponent>,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.genres = Object.values(Genre);

    this.addBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      cover: ['', Validators.required],
      author: ['', Validators.required],
      pages: ['', [Validators.required, numberValidator, minValidator]],
      readByGroup: ['', Validators.required],
      synopsis: ['', Validators.required],
      genre: [''],
    });
  }

  ngOnInit(): void {
    if (this.dataService.authorsNameAndIdList.length == 0) {
      this.dataService.getauthorsNameAndIdList().subscribe({
        next: (resp) => {
          (this.authorsNameList = resp.data!.map((author) => author.name)),
            (this.dataService.authorsNameAndIdList = resp.data!);
        },
        error: (resp) => {
          Swal.fire(
            'Error',
            `Ocurrió un error al intentar conseguir la lista de autores de la base de datos. ${resp.error}`,
            'error'
          );
        },
      });
    } else {
      this.authorsNameList = this.dataService.authorsNameAndIdList.map(
        (author) => author.name
      );
    }
  }

  addBook() {
    if (this.addBookForm.valid) {
      const newBook: Book = this.addBookForm.value;
      this.dataService.postBook(newBook).subscribe({
        next: (resp) => {
          Swal.fire(
            'Autor agregado',
            `${newBook.title} se agregó exitosamente a la base de datos`,
            'success'
          );
          this.dataService.books.push(resp.data!);
          this.closeModal();
        },
        error: (resp) => {
          Swal.fire(
            'Error',
            `Ocurrió un error al agregar a ${newBook.title} a la base de datos. ${resp.error}`,
            'error'
          );
        },
      });
    }
  }

  addAuthorToForm(event: string[]) {
    this.selectedAuthor = this.dataService.authorsNameAndIdList.find(
      (author) => author.name == event[0]
    )!;
    this.addBookForm.get('author')!.setValue(this.selectedAuthor);
  }

  addGenreToForm(event: string[]) {
    this.selectedGenres = event;
    this.addBookForm.get('genre')!.setValue(this.selectedGenres);
  }

  setMonthAndYear(event: string, picker: MatDatepicker<any>) {
    this.addBookForm.get('readByGroup')!.setValue(event);
    picker.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

  openAddAuthorModal() {
    this.dialog.open(AddAuthorModalComponent);
  }
}
