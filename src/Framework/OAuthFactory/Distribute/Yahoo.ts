import { OAuth } from '../Process/OAuth'
import { DeepLinkMatch } from '../../Deeplink/Deeplink';

import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Deeplinks } from '@ionic-native/deeplinks';

export class Yahoo extends OAuth {

    private _state: string;
    //Optional. Your client can insert state information that will be appended to the redirect_uri upon success user authorization.

    private _language: string;
    //Optional. Language identifier. Default value is en-us.

    private _scope: string;

    get State(): string { return this._state; };
    set State(value: string) {
        this._state = value;
        this.URIBuilder.Parameters["state"] = value;
    };

    get Language(): string { return this._language; };
    set Language(value: string) {
        this._language = value;
        this.URIBuilder.Parameters["language"] = value;
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

        this.URIBuilder.Uri = "https://api.login.yahoo.com/oauth2/request_auth";
        this.URIBuilder.ResponseType = "code";

        this.URIBuilder.Parameters = {
            "state": this._state,
            "language": this._language
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