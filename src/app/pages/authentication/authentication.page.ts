import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: 'authentication.page.html',
  styleUrls: ['authentication.page.scss'],
})
export class AuthenticationPage {
  username: string = '';
  password: string = '';

  constructor() {}

  login() {
    // Check if username and password are correct (hardcoded for now)
    if (this.username === 'your_username' && this.password === 'your_password') {
      // Navigate to the main page if login is successful
      // Add the necessary navigation code here
    } else {
      // Show an error message for invalid credentials
    }
  }
}
