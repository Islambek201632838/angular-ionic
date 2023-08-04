import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactFindOptions } from '@ionic-native/contacts/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class MainPage implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private contactsService: Contacts,
    private androidPermissions: AndroidPermissions,
    private navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.androidPermissions
      .checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS)
      .then((result) => {
        if (result.hasPermission) {
          this.fetchContacts();
        } else {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_CONTACTS)
            .then((permissionResult) => {
              if (permissionResult.hasPermission) {
                this.fetchContacts();
              } else {
                console.log('Permission denied.');
              }
            });
        }
      });
  }

  fetchContacts() {
    const options = {
      filter: '',
      multiple: true
    } as ContactFindOptions;

    this.contactsService.find(['displayName', 'phoneNumbers'], options)
      .then((contacts: Contact[]) => {
        this.contacts = contacts;
      })
      .catch((error: any) => {
        console.log('Error fetching contacts:', error);
      });
  }

  viewContactDetails(contact: Contact) {
    this.navCtrl.navigateForward(['/second-page'], { state: { contact } });
  }

  scanQrCode() {
    this.barcodeScanner.scan()
      .then(barcodeData:any => {
        alert('QR Code data: ' + barcodeData.text);
      })
      .catch(err: any => {
        console.log('Error while scanning QR Code:', err);
      });
  }
}
