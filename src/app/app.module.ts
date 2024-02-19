import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components.module';
import { MaterialModule } from './modules/material.module';
import { PagesModule } from './modules/pages.module';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    PagesModule,
    ComponentsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CookieService, DataService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
