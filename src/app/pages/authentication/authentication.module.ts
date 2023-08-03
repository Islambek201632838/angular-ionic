import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { AuthenticationPage } from './authentication.page';

@NgModule({
  declarations: [AuthenticationPage],
  imports: [
    CommonModule, 
    IonicModule, 
    FormsModule,
    RouterModule.forChild([{ path: '', component: AuthenticationPage }]),
  ],
  
})
export class AuthenticationPageModule {}
