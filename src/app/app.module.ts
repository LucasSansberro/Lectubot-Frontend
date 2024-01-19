import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { BooksComponent } from './pages/books/books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersService } from './services/users.service';
import { DataService } from './services/data.service';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CarouselCardBookComponent } from './components/carousel-card-book/carousel-card-book.component';
import { HomePageSidebarComponent } from './components/home-page-sidebar/home-page-sidebar.component';
import { HomePageMainComponent } from './components/home-page-main/home-page-main.component';
import { HomePageBookCardComponent } from './components/home-page-book-card/home-page-book-card.component';
import { MatInputModule } from '@angular/material/input';
import { BookProfileComponent } from './pages/book-profile/book-profile.component';
import { BookProfilePageSidebarComponent } from './components/book-profile-page-sidebar/book-profile-page-sidebar.component';
import { BookProfilePageMainComponent } from './components/book-profile-page-main/book-profile-page-main.component';
import { BookReviewComponent } from './components/book-review/book-review.component';
import { AuthorProfileComponent } from './pages/author-profile/author-profile.component';
import { BookItemListComponent } from './components/book-item-list/book-item-list.component';
import { BooksPageBookCardComponent } from './components/books-page-book-card/books-page-book-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    BooksComponent,
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CarouselCardBookComponent,
    HomePageSidebarComponent,
    HomePageMainComponent,
    HomePageBookCardComponent,
    BookProfileComponent,
    BookProfilePageSidebarComponent,
    BookProfilePageMainComponent,
    BookReviewComponent,
    AuthorProfileComponent,
    BookItemListComponent,
    BooksPageBookCardComponent,
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
  ],
  providers: [CookieService, DataService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
