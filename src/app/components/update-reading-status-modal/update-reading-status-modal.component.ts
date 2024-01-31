import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-reading-status-modal',
  templateUrl: './update-reading-status-modal.component.html',
  styleUrl: './update-reading-status-modal.component.css',

})
export class UpdateReadingStatusModalComponent {
  @ViewChild('closeButton') closeButton!: ElementRef;
  showAlert(title: string, text: string) {
    Swal.fire({
      title,
      text,
      icon: 'success',
    });
    this.closeModal();
  }
  closeModal() {
    (this.closeButton.nativeElement as HTMLElement).click();
  }
}
