import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';
import { SafariViewController } from '@ionic-native/safari-view-controller';

//let Google = require("../../Framework/OAuthFactory/Distribute/Google");

import { Google, GoogleScopes } from '../../Framework/OAuthFactory/Distribute/Google';
import { Outlook } from '../../Framework/OAuthFactory/Distribute/Outlook';
import { Facebook } from '../../Framework/OAuthFactory/Distribute/Facebook';
import { Yahoo } from '../../Framework/OAuthFactory/Distribute/Yahoo';


/**
 * Generated class for the AddNewAccountListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-add-new-account-list',
    templateUrl: 'add-new-account-list.html',
})
export class AddNewAccountListPage {

    private ggl: Google;
    private olk: Outlook;
    private yho: Yahoo;
    private fbk: Facebook;

    constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, iab: InAppBrowser, svc: SafariViewController, dlp: Deeplinks) {
        this.ggl = new Google(plt, iab, svc, dlp);
        this.ggl.AccessType = Google.AccessType.offline;
        this.ggl.DeepLinkshandler.AddRoute("/add-new-account-list", AddNewAccountListPage);
        this.ggl.IncludeGrantedScopes = true;
        this.ggl.Prompt = Google.Prompt.consent;
        this.ggl.Scope = GoogleScopes.Google_Sign_In.openid.Key + "%20" + GoogleScopes.Google_Sign_In.email.Key + "%20" + GoogleScopes.Google_Sign_In.profile.Key; // + "%20" + GoogleScopes.Google_People_API_v1.contacts.URL; https://www.google.com/m8/feeds/
        this.ggl.URIBuilder.ClientID = "362132652570-cbmg1cid206sqp857u2urm7mt5qjemca.apps.googleusercontent.com";
        this.ggl.URIBuilder.RedirectUri = "http://www.softultima.com/redirect.html";

        this.yho = new Yahoo(plt, iab, svc, dlp);
        this.yho.DeepLinkshandler.AddRoute("/add-new-account-list", AddNewAccountListPage);
        this.yho.URIBuilder.ClientID = "*********";
        this.yho.URIBuilder.RedirectUri = "www.example.com/redirect.html";

        this.olk = new Outlook(plt, iab, svc, dlp);
        this.olk.Scope = "openid%20email%20offline_access";
        this.olk.Tenant = Outlook.Tenant.common;
        this.olk.Prompt = Outlook.Prompt.consent;
        this.olk.DeepLinkshandler.AddRoute("/add-new-account-list", AddNewAccountListPage);
        this.olk.URIBuilder.ClientID = "cc7cfc77-542b-421c-8dc9-41b0b8feda5b";
        this.olk.URIBuilder.RedirectUri = "https://www.softultima.com/redirect.html";

        this.fbk = new Facebook(plt, iab, svc, dlp);
        this.fbk.DeepLinkshandler.AddRoute("/add-new-account-list", AddNewAccountListPage);
        this.fbk.State = "state=exampleState"
        this.fbk.Scope = "public_profile%20user_friends%20email%20user_birthday%20";
        this.fbk.URIBuilder.ClientID = "477591662581330";
        this.fbk.URIBuilder.RedirectUri = "http://www.softultima.com/redirect.html";

    }


    onClick(name?: string): void {

        this.plt.ready().then(() => {

            switch (name.toUpperCase()) {
                case "GMAIL":
                    this.ggl.Login()
                    break;
                case "YAHOO":
                    this.yho.Login();
                    break;
                case "OUTLOOK":
                    this.olk.Login();
                    break;
                case "FACEBOOK":
                    this.fbk.Login();
                    break;
            }

        });


    }



}
