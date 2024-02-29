import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Author } from 'src/app/models/Entities/Author';
import { Book } from 'src/app/models/Entities/Book';
import { Genre } from 'src/app/models/Enums/Genre';
import { DataService } from 'src/app/services/data.service';
import { AddAuthorModalComponent } from '../add-author-modal/add-author-modal.component';
@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrl: './add-book-modal.component.css',
})
export class AddBookModalComponent implements OnInit {
  @Input() genres: string[] = [];
  authorsName: string[] = [];
  addBookForm: FormGroup;
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
      pages: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/),
          Validators.min(1),
        ],
      ],
      readByGroup: ['', Validators.required],
      synopsis: ['', Validators.required],
      genre: [''],
    });
  }

  ngOnInit(): void {
    if (this.dataService.authorsNameAndId.length == 0) {
      this.dataService.getAuthorsNameAndId().subscribe({
        next: (resp) => {
          (this.authorsName = resp.data!.map((author) => author.name)),
            (this.dataService.authorsNameAndId = resp.data!);
        },
      });
    } else {
      this.authorsName = this.dataService.authorsNameAndId.map(
        (author) => author.name
      );
    }
  }

  addBook() {
    if (this.addBookForm.valid) {
      const newBook: Book = this.addBookForm.value;
      newBook.author = { name: this.addBookForm.value.author };
      console.log(newBook);
      /*  this.dataService
        .postBook(nuevoLibro)
        .subscribe({ next: (resp) => console.log(resp) });
    } */
    }
  }

  addAuthorToForm(event: string[]) {
    this.selectedAuthor = this.dataService.authorsNameAndId.find(
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
  openAddAuthorModal(){
    this.dialog.open(AddAuthorModalComponent);
  }
}
