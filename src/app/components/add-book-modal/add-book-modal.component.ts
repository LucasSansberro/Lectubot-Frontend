import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Author } from 'src/app/models/Entities/Author';
import { Book } from 'src/app/models/Entities/Book';
import { Genre } from 'src/app/models/Enums/Genre';
import { DataService } from 'src/app/services/data.service';
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
  selectedAuthorName!: string;

  constructor(
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
    if (this.dataService.authorsName.length == 0) {
      this.dataService.getAuthorsName().subscribe({
        next: (resp) => {
          (this.authorsName = resp.data!),
            (this.dataService.authorsName = resp.data!);
        },
      });
    } else {
      this.authorsName = this.dataService.authorsName;
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
    this.selectedAuthorName = this.dataService.authorsName.find(
      (name) => name == event[0]
    )!;
    this.addBookForm.get('author')!.setValue(this.selectedAuthorName);
  }

  addGenreToForm(event: string[]) {
    this.selectedGenres = event;
    this.addBookForm.get('genre')!.setValue(this.selectedGenres);
  }

  setMonthAndYear(event: string, picker: MatDatepicker<any>) {
    this.addBookForm.get('readByGroup')!.setValue(event);
    picker.close();
  }
}
