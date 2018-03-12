import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AddNewAccountListPage } from '../add-new-account-list/add-new-account-list';

/**
 * Generated class for the AccountsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-accounts',
    templateUrl: 'accounts.html',
})
export class AccountsPage implements OnInit {

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }


    ngOnInit() {
    }


    onAddClick() {

        this.navCtrl.push(AddNewAccountListPage);

    }

}
