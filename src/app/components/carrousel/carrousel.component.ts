import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  images = ["https://concepto.de/wp-content/uploads/2015/03/biblioteca-e1550105792560.jpg", "https://edge.ua.edu/wp-content/uploads/2014/11/reading2.jpg", "https://media.istockphoto.com/id/1018674766/photo/man-picking-up-book-from-shelf.jpg?s=170667a&w=0&k=20&c=XFPRL64WZG18nuKYVcAqzms1WHt5S9MFRn1BWtaso9c="]
}
