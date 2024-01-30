import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';

const heightTransition = trigger('heightTransition', [
  state(
    'in',
    style({
      height: '50vh',
    })
  ),
  transition('void => *', [style({ height: '0' }), animate('0.5s ease-out')]),
  transition('* => void', [animate('0.5s ease-out'), style({ height: '0' })]),
]);

@Component({
  selector: 'app-update-reading-status-modal',
  templateUrl: './update-reading-status-modal.component.html',
  styleUrl: './update-reading-status-modal.component.css',
  animations: [heightTransition],
})
export class UpdateReadingStatusModalComponent {
  @ViewChild('closeButton') closeButton!: ElementRef;
  selectedValue: string = 'no';
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
