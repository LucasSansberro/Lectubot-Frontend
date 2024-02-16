import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookItemListComponent } from '../components/book-item-list/book-item-list.component';
import { BookProfilePageMainComponent } from '../components/book-profile-page-main/book-profile-page-main.component';
import { BookProfilePageSidebarComponent } from '../components/book-profile-page-sidebar/book-profile-page-sidebar.component';
import { BookReviewComponent } from '../components/book-review/book-review.component';
import { BooksPageBookCardComponent } from '../components/books-page-book-card/books-page-book-card.component';
import { CarouselCardBookComponent } from '../components/carousel-card-book/carousel-card-book.component';
import { CarrouselComponent } from '../components/carrousel/carrousel.component';
import { FilterSelectorComponent } from '../components/filter-selector/filter-selector.component';
import { FinishReadingStatusModalComponent } from '../components/finish-reading-status-modal/finish-reading-status-modal.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomePageBookCardComponent } from '../components/home-page-book-card/home-page-book-card.component';
import { HomePageMainComponent } from '../components/home-page-main/home-page-main.component';
import { HomePageSidebarComponent } from '../components/home-page-sidebar/home-page-sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RatingStarsComponent } from '../components/rating-stars/rating-stars.component';
import { UpdateReadingStatusModalComponent } from '../components/update-reading-status-modal/update-reading-status-modal.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from '../app-routing.module';
import { AddBookModalComponent } from '../components/add-book-modal/add-book-modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CarouselCardBookComponent,
    HomePageSidebarComponent,
    HomePageMainComponent,
    HomePageBookCardComponent,
    BookProfilePageSidebarComponent,
    BookProfilePageMainComponent,
    BookReviewComponent,
    BookItemListComponent,
    BooksPageBookCardComponent,
    FilterSelectorComponent,
    UpdateReadingStatusModalComponent,
    FinishReadingStatusModalComponent,
    RatingStarsComponent,
    AddBookModalComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, AppRoutingModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CarouselCardBookComponent,
    HomePageSidebarComponent,
    HomePageMainComponent,
    HomePageBookCardComponent,
    BookProfilePageSidebarComponent,
    BookProfilePageMainComponent,
    BookReviewComponent,
    BookItemListComponent,
    BooksPageBookCardComponent,
    FilterSelectorComponent,
    UpdateReadingStatusModalComponent,
    FinishReadingStatusModalComponent,
    RatingStarsComponent,
    AddBookModalComponent
  ],
})
export class ComponentsModule {}
