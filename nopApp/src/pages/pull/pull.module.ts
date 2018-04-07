import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PullPage } from './pull';

@NgModule({
  declarations: [
    PullPage,
  ],
  imports: [
    IonicPageModule.forChild(PullPage),
  ],
})
export class PullPageModule {}
