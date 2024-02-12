import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthorProfileComponent } from "./pages/author-profile/author-profile.component";
import { BookProfileComponent } from "./pages/book-profile/book-profile.component";
import { BooksComponent } from "./pages/books/books.component";
import { HomeComponent } from "./pages/home/home.component";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'autor/:autor-id', pathMatch: 'full', component: AuthorProfileComponent },
  { path: 'libros', pathMatch: 'full', component: BooksComponent },
  { path: 'libro/:libro-id', pathMatch: 'full', component: BookProfileComponent },
  { path: 'user', pathMatch: 'full', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
