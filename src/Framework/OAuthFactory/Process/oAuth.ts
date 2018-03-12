import { Browser, BrowserResponse } from '../../Browser/Browser';
import { DeeplinkHandler, DeepLinkMatch } from '../../Deeplink/Deeplink';
import { OAuthURLBuilder } from '../Prepare/OAuthURLBuilder'

import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Deeplinks } from '@ionic-native/deeplinks';


export class OAuth {
    public Browser: Browser;
    public DeepLinkshandler: DeeplinkHandler;

    public URIBuilder: OAuthURLBuilder;

    public SuccessFunction: (match: DeepLinkMatch) => any;
    public ErrorFunction: (error: Error) => any;

    constructor(public plt: Platform, public iab: InAppBrowser, public safariViewController: SafariViewController, private deeplinks: Deeplinks) {

        this.Browser = new Browser(iab, plt, safariViewController);
        this.DeepLinkshandler = new DeeplinkHandler(deeplinks);



        this.URIBuilder = new OAuthURLBuilder();
    }



    public Open(Routes?: {}): Promise<BrowserResponse> {

        alert(this.URIBuilder.OAuthURL);

        this.Browser.Uri = this.URIBuilder.OAuthURL;

        if (this.DeepLinkshandler.HasRouts) {

            let r = this.DeepLinkshandler.OpenDeepLink(
                (Match: DeepLinkMatch) => {
                    this.Browser.Close();

                    alert(JSON.stringify(Match));

                    if (this.SuccessFunction)
                        this.SuccessFunction(Match);
                },
                (error: Error) => {
                    this.Browser.Close();

                    if (this.ErrorFunction)
                        this.ErrorFunction(error);
                }, Routes);
        }

        return new Promise<BrowserResponse>((resolve, reject) => {
            this.Browser.Open().then((response) => {
                this.Browser.Close();
                resolve(response);
            }).catch((error) => {
                this.Browser.Close();
                reject(error);
            });
        })
    };

    private _response
}