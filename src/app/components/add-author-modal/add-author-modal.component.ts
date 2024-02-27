import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/Entities/Author';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrl: './add-author-modal.component.css',
})
export class AddAuthorModalComponent {
  addAuthorForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.addAuthorForm = this.formBuilder.group({
      title: ['', Validators.required],
      cover: ['', Validators.required],
      author: ['', Validators.required],
      readByGroup: ['', Validators.required],
      synopsis: ['', Validators.required],
    });
  }
  addAuthor() {
    if (this.addAuthorForm.valid) {
      const newAuthor: Author = this.addAuthorForm.value;
      console.log(newAuthor);
      /*  this.dataService
        .postBook(nuevoLibro)
        .subscribe({ next: (resp) => console.log(resp) });
    } */
    }
  }
}
