import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewAccountListPage } from './add-new-account-list';

@NgModule({
  declarations: [
    AddNewAccountListPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewAccountListPage),
  ],
  exports: [
    AddNewAccountListPage
  ]
})
export class AddNewAccountListPageModule {}
