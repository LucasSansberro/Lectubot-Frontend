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
  @ViewChild('closeButton') closeButton!: ElementRef;

  constructor(
    private dialogRef: MatDialogRef<UpdateReadingStatusModalComponent>,
    @Inject(MAT_DIALOG_DATA) private book: any,
    private dialog: MatDialog
  ) {}

  startReading() {
    console.log(this.book);
    //TODO Create BookRead with this.book data
    /*  this.bookService.postBookRead(this.book).subscribe({next: ()=> {
  this.showAlert(
      'Comenzada la lectura!',
      'El libro se agregó a tu lista de lectura'
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
    this.showAlert(
      'Movido a DNF',
      'Se removió el libro de tu lista de lecturas en progresó'
    );
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  showAlert(title: string, text: string) {
    Swal.fire({
      title,
      text,
      icon: 'success',
    });
  }
}
