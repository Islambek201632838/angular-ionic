import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationPage } from './authentication.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthenticationPage }]),
  ],
  declarations: [AuthenticationPage],
})
export class AuthenticationPageModule {}
