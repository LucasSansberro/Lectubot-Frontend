import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

const heightTransition = trigger('heightTransition', [
  transition('void => *', [
    style({ 'min-height': '0', height: '0' }),
    animate('0.5s ease-out'),
  ]),
  transition('* => void', [
    animate('0.5s ease-out'),
    style({ 'min-height': '0', height: '0' }),
  ]),
]);

@Component({
  selector: 'app-finish-reading-status-modal',
  templateUrl: './finish-reading-status-modal.component.html',
  styleUrl: './finish-reading-status-modal.component.css',
  animations: [heightTransition],
})
export class FinishReadingStatusModalComponent {
  selectedValue: string = 'no';
}
