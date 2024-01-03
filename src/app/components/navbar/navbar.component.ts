import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userEmail: string = '';

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.getCurrentUser().then((user) => {
      this.userEmail = user?.email || '';
    });
  }


  logout() {
    this.authService.logout();
  }
}
