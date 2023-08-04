import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: 'authentication.page.html',
  styleUrls: ['authentication.page.scss'],
})
export class AuthenticationPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Check if username and password are correct (hardcoded for now)
    if (this.username === 'username' && this.password === 'password') {
      // Navigate to the main page if login is successful
      this.router.navigate(['/main']);
    } else {
      // Show an error message for invalid credentials
    }
  }
}
