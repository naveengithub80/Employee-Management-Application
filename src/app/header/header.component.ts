// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);  // Navigates to the home page
  }

  goToLogin() {
    this.router.navigate(['/login']);  // Navigates to the login page
  }
}
