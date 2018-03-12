import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

    LoginForm: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    private initializeForm() {
        this.LoginForm = new FormGroup({
            'username': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        //call webservice to login
        //console.log(this.LoginForm);
        this.navCtrl.push(TabsPage);
    }

    onRegisterClick() {
        //call webservice to register
    }

    onForgotClick() {
        //call webservice to reset password
    }
}
