import { OAuth } from '../Process/OAuth'
import { DeepLinkMatch } from '../../Deeplink/Deeplink';

import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Deeplinks } from '@ionic-native/deeplinks';


export module FacebookScopes {
    //refer to https://developers.facebook.com/docs/facebook-login/permissions/
}


export class Facebook extends OAuth {

    private _state: string;
    //Required. An arbitrary unique string created by your app to guard against Cross-site Request Forgery

    private _scope: string;
    //Optional. Language identifier. Default value is en-us.


    get State(): string { return this._state; };
    set State(value: string) {
        this._state = value;
        this.URIBuilder.Parameters["state"] = value;
    };

    get Scope(): string { return this._scope; };
    set Scope(value: string) {
        this._scope = value;
        this.URIBuilder.Parameters["scope"] = value;
    };


    constructor(plt: Platform, iab: InAppBrowser, safariViewController: SafariViewController, deeplinks: Deeplinks) {
        super(plt, iab, safariViewController, deeplinks);

        this.URIBuilder.ClientIDFieldName = "client_id";
        this.URIBuilder.ResponseTypeFieldName = "response_type";
        this.URIBuilder.RedirectUriFieldName = "redirect_uri";

        this.Browser.Target = "_system";
        this.Browser.Options = "location=yes;toolbar=no";

        this.URIBuilder.Uri = "https://www.facebook.com/v2.9/dialog/oauth";
        this.URIBuilder.ResponseType = "code";

        this.URIBuilder.Parameters = {
            "state": this._state,
            "scope": this._scope
        };
    }

    public Login(): any {
        this.plt.ready().then(() => {
            this.Open().then((response) => {

                //Handle response from SafariViewController
                //This promise only requires if the App is running on iOS and has found safari view controller.

            });
        })
    }
}


export module Facebook {

    export class Scope {
        public Key: string;
        public Description: string;
        public URL: string;
    }

}