import { OAuth } from '../Process/OAuth'
import { DeepLinkMatch } from '../../Deeplink/Deeplink';

import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Deeplinks } from '@ionic-native/deeplinks';


export module OutlookScopes {
    //refer to https://developer.microsoft.com/en-us/graph/docs/authorization/permission_scopes
}


export class Outlook extends OAuth {

    private _state: string;
    //Optional. Your client can insert state information that will be appended to the redirect_uri upon success user authorization.

    private _scope: string;
    //Optional. Language identifier. Default value is en-us.

    private _tenant: Outlook.Tenant;
    //The {tenant } value in the path of the request can be used to control who can sign into the application. The allowed values are common, organizations, consumers, and tenant identifiers. For more detail, see protocol basics.

    private _response_mode: Outlook.ResponseMode;
    //Specifies the method that should be used to send the resulting token back to your app.Can be query or form_post

    private prompt: Outlook.Prompt;
    //optional	Indicates the type of user interaction that is required.The only valid values at this time are 'login', 'none', and 'consent'.prompt = login will force the user to enter their credentials on that request, negating single- sign on.prompt = none is the opposite - it will ensure that the user is not presented with any interactive prompt whatsoever.If the request cannot be completed silently via single- sign on, the v2.0 endpoint will return an error.prompt = consent will trigger the OAuth consent dialog after the user signs in, asking the user to grant permissions to the app.

    private login_hint: string;
    //optional	Can be used to pre- fill the username/ email address field of the sign in page for the user, if you know their username ahead of time.Often apps will use this parameter during re- authentication, having already extracted the username from a previous sign-in using the preferred_username claim.

    private domain_hint: Outlook.DomainHint;
    //optional	Can be one of consumers or organizations.If included, it will skip the email- based discovery process that user goes through on the v2.0 sign in page, leading to a slightly more streamlined user experience.Often apps will use this parameter during re- authentication, by extracting the tid from a previous sign-in. If the tid claim value is 9188040d- 6c67- 4c5b- b112 - 36a304b66dad, you should use domain_hint= consumers.Otherwise, use domain_hint= organizations.


    get State(): string { return this._state; };
    set State(value: string) {
        this._state = value;
        this.URIBuilder.Parameters["state"] = value;
    };

    get Tenant(): Outlook.Tenant { return this._tenant; };
    set Tenant(value: Outlook.Tenant) {
        this._tenant = value;

        this.URIBuilder.Uri = "https://login.microsoftonline.com/" + Outlook.ToString.Tenant(this._tenant) + "/oauth2/v2.0/authorize";

        //this.URIBuilder.Parameters["tenant"] = Outlook.ToString.Tenant(value);
    };

    get ResponseMode(): Outlook.ResponseMode { return this._response_mode; };
    set ResponseMode(value: Outlook.ResponseMode) {
        this._response_mode = value;
        this.URIBuilder.Parameters["response_mode"] = Outlook.ToString.ResponseMode(value);
    };

    get Prompt(): Outlook.Prompt { return this.prompt; };
    set Prompt(value: Outlook.Prompt) {
        this.prompt = value;
        this.URIBuilder.Parameters["prompt"] = Outlook.ToString.Prompt(value);
    };

    get LoginHint(): string { return this.login_hint; };
    set LoginHint(value: string) {
        this.login_hint = value;
        this.URIBuilder.Parameters["login_hint"] = value;
    };

    get DomainHint(): Outlook.DomainHint { return this.domain_hint; };
    set DomainHint(value: Outlook.DomainHint) {
        this.domain_hint = value;
        this.URIBuilder.Parameters["domain_hint"] = Outlook.ToString.DomainHint(value);
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

        this.URIBuilder.Uri = "https://login.microsoftonline.com/" + Outlook.ToString.Tenant(this._tenant) + "/oauth2/v2.0/authorize";

        this.URIBuilder.ResponseType = "code";

        this.URIBuilder.Parameters = {
            "state": this._state,
            "scope": this._scope,
            "response_mode": Outlook.ToString.ResponseMode(this._response_mode),
            "prompt": Outlook.ToString.Prompt(this.prompt),
            "login_hint": this.login_hint,
            "domain_hint": Outlook.ToString.DomainHint(this.domain_hint),
        };
    }

    public Login(Routes?: {}): any {

        

        this.plt.ready().then(() => {
            this.Open(Routes).then((response) => {

                //Handle response from SafariViewController
                //This promise only requires if the App is running on iOS and has found safari view controller.

            });
        })
    }

}


export module Outlook {

    export class Scope {
        public Key: string;
        public Description: string;
        public URL: string;
    }

    export enum Tenant {
        common = 0,
        organization = 1,
        consumer = 2
    }

    export enum ResponseMode {
        query = 0,
        form_post = 1
    }


    export enum Prompt {
        none = 0, //Do not display any authentication or consent screens. Must not be specified with other values.
        consent = 1, //Prompt the user for consent.
        login = 2 //force the user to enter their credentials on that request, negating single-sign on
    }

    export enum DomainHint {
        consumer = 0,
        organization = 1

    }

    export class ToString {

        public static Tenant(T: Tenant): string {
            switch (T) {
                case Tenant.common: return "common";
                case Tenant.organization: return "organization";
                case Tenant.consumer: return "consumer";
                default: return "common";
            }
        }

        public static ResponseMode(RM: ResponseMode): string {
            switch (RM) {
                case ResponseMode.form_post: return "form_post";
                case ResponseMode.query: return "query";
                default: return "";
            }
        }

        public static Prompt(P: Prompt): string {

            switch (P) {
                case Prompt.consent: return "consent";
                case Prompt.none: return "none";
                case Prompt.login: return "login";
                default: return "none";
            }
        }

        public static DomainHint(DH: DomainHint): string {

            switch (DH) {
                case DomainHint.consumer: return "consumer";
                case DomainHint.organization: return "organization";
                default: return "";
            }
        }
    }
}

