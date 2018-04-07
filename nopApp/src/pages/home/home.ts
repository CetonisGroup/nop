import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharePage } from '../share/share';
import { AddUserPage } from '../add-user/add-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
