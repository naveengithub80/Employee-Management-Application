// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  register() {
    const success = this.authService.register(this.username, this.password);
    if (success) {
      this.message = 'Registration successful! Please login.';
    } else {
      this.message = 'User already exists.';
    }
  }
}
