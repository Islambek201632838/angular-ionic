// second.page.ts
import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Contact } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {
  contact: Contact;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.contact = this.navParams.get('contact');
  }
}
