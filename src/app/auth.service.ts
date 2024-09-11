// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Mock user database
  private users = [
    { username: 'admin', password: 'admin123' }
  ];

  // Registration
  register(username: string, password: string): boolean {
    const userExists = this.users.find(user => user.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      return true;
    }
    return false; // User already exists
  }

  // Login
  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false; // Invalid credentials
  }

  // Logout
  logout(): void {
    localStorage.removeItem('user');
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
