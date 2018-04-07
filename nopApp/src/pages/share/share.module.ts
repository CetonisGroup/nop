import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharePage } from './share';

import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    SharePage,
  ],
  imports: [
    NgxQRCodeModule,
    IonicPageModule.forChild(SharePage),
  ],
})
export class SharePageModule { }
