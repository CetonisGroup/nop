import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharePage } from '../share/share';
import { AddUserPage } from '../add-user/add-user';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allContacts;
  constructor(public navCtrl: NavController, private contacts: Contacts) {
    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], { filter: "", multiple: true })
      .then(data => {
        this.allContacts = data
      });
  }

  public pull() {
    console.log('pull called');
  }

  public push() {
    console.log('push called');
  }

  public navigate(pageId) {
    this.navCtrl.push(pageId);
  }


}
