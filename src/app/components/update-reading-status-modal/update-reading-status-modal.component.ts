import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import { BookRead } from 'src/app/models/Entities/BookRead';
import { BookReadStatus } from 'src/app/models/Enums/BookReadStatus';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { FinishReadingStatusModalComponent } from '../finish-reading-status-modal/finish-reading-status-modal.component';
import { DataService } from 'src/app/services/data.service';
import { Book } from 'src/app/models/Entities/Book';

@Component({
  selector: 'app-update-reading-status-modal',
  templateUrl: './update-reading-status-modal.component.html',
  styleUrl: './update-reading-status-modal.component.css',
})
export class UpdateReadingStatusModalComponent {
  constructor(
    private dialogRef: MatDialogRef<UpdateReadingStatusModalComponent>,
    private dialog: MatDialog,
    private userService: UsersService,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) private book: Book
  ) {}

  startReading() {
    const newBookRead: BookRead = {
      book_id: this.book._id!,
      user_id: this.userService.loggedInUser?._id!,
      status: BookReadStatus.reading,
      started: new Date(),
    };
    this.dataService.postBookRead(newBookRead).subscribe({
      next: (resp) => {
        console.log(resp);
        Swal.fire(
          'Comenzada la lectura!',
          `${this.book.title} se agregó a tu lista de lectura`,
          'success'
        );
        this.closeModal();
      },
    });
  }

  finishReading() {
    this.dialog.open(FinishReadingStatusModalComponent, {
      data: this.book,
    });
  }

  DNF() {
    Swal.fire(
      'Movido a DNF',
      'Se removió el libro de tu lista de lecturas en progresó',
      'success'
    );
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
