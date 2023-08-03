import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { AuthenticationPage } from './authentication.page';

@NgModule({
  declarations: [AuthenticationPage],
  imports: [CommonModule, IonicModule, FormsModule], // Add FormsModule here
})
export class AuthenticationPageModule {}
