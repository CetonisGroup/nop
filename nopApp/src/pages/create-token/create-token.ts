import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivacyTokenService } from '../../app/services/privacy-token.service';

/**
 * Generated class for the CreateTokenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-token',
  templateUrl: 'create-token.html',
})
export class CreateTokenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private privacyTokenService: PrivacyTokenService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTokenPage');
  }

  public async createToken() {
    await this.privacyTokenService.createPrivacyToken();
    const key = await this.privacyTokenService.getPrivacyToken();
    console.log(key);

  }
}
