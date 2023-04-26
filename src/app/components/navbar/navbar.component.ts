import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public username: any = '';
  constructor(private userService: UsersService, private router: Router) {}
  ngOnInit(): void {
    this.userService.iniciarSesion().subscribe({
      next: (data: any) => {
        if (data.test != null) {
          this.username = data.test.username;
          this.router.navigate(['/user'])
        }
      },
      error: (e: any) => {
        console.log(e);
      },
    });
  }
  cerrarSesion(): any {
    this.userService.cerrarSesion().subscribe(window.location.reload());
  }
}
