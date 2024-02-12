import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorProfileComponent } from '../pages/author-profile/author-profile.component';
import { BookProfileComponent } from '../pages/book-profile/book-profile.component';
import { BooksComponent } from '../pages/books/books.component';
import { HomeComponent } from '../pages/home/home.component';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { ComponentsModule } from "./components.module";
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        HomeComponent,
        UserProfileComponent,
        BooksComponent,
        BookProfileComponent,
        AuthorProfileComponent,
    ],
    exports: [
        HomeComponent,
        UserProfileComponent,
        BooksComponent,
        BookProfileComponent,
        AuthorProfileComponent,
    ],
    imports: [CommonModule, ComponentsModule, MaterialModule]
})
export class PagesModule {}
