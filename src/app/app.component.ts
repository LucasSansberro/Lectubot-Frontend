import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  iniciarSesion(): any {
    console.log("Hola");

    this.http.get(`${this.URL}/auth`).subscribe();
  }
}
