import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private URL = 'http://localhost:3000';
  cookieValue: string;
  image: string = '';
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get('connect.sid');
  }

  iniciarSesion(): any {
    this.http
      .get(`${this.URL}`, { withCredentials: true })
      .subscribe(
        (data : any) => (
          console.log(data),
          (this.image = `https://cdn.discordapp.com/avatars/${data.test.discordId}/${data.test.avatar}.png`)
        )
      );
  }
}
