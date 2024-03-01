import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { FinishReadingStatusModalComponent } from '../finish-reading-status-modal/finish-reading-status-modal.component';

@Component({
  selector: 'app-update-reading-status-modal',
  templateUrl: './update-reading-status-modal.component.html',
  styleUrl: './update-reading-status-modal.component.css',
})
export class UpdateReadingStatusModalComponent {


  constructor(
    private dialogRef: MatDialogRef<UpdateReadingStatusModalComponent>,
    @Inject(MAT_DIALOG_DATA) private book: any,
    private dialog: MatDialog
  ) {}

  startReading() {
    console.log(this.book);
    //TODO Create BookRead with this.book data
    /*  this.bookService.postBookRead(this.book).subscribe({next: ()=> {
  Swal.fire(
      'Comenzada la lectura!',
      'El libro se agregó a tu lista de lectura',
      'success'
    );
    this.closeModal()
    }});
   */
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
