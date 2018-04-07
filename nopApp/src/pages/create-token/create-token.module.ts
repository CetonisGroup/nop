import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTokenPage } from './create-token';

@NgModule({
  declarations: [
    CreateTokenPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTokenPage),
  ],
})
export class CreateTokenPageModule {}
