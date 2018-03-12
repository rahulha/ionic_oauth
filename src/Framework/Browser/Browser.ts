import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';
import { SafariViewController } from '@ionic-native/safari-view-controller';

declare var window: any;

export class BrowserResponse {

}

export class Browser {
    //Private members
    private _uri: string;
    private _target: string;
    private _options: string;
    private _browserref: any;
    private _isBrowserSafari: boolean;

    //Public members
    get Uri(): string { return this._uri; }
    set Uri(value: string) { this._uri = value; }

    get Target(): string { return this._target; };
    set Target(value: string) { this._target = value; };

    get Options(): string { return this._options; };
    set Options(value: string) { this._options = value; };


    constructor(private iab: InAppBrowser, private plt: Platform, private safariViewController: SafariViewController) {

    }


    public Open(): Promise<BrowserResponse> {

        alert(this.plt.platforms());

        return new Promise<BrowserResponse>((resolve, reject) => {

            if (this.plt.is('ios') || this.plt.is('ipad') || this.plt.is('iphone')) {

                if (this.safariViewController) {
                    this.safariViewController.isAvailable()
                        .then((available: boolean) => {
                            if (available) {

                                this.safariViewController.show({
                                    url: this.Uri,
                                    hidden: false,
                                    animated: false,
                                    transition: 'curl',
                                    enterReaderModeIfAvailable: true,
                                    tintColor: '#ff0000'
                                })
                                    .then((result: any) => {

                                        //if (result.event === 'opened') { this._isBrowserSafari = true; this._browserref = this.safariViewController; }
                                        //else if (result.event === 'loaded') { }
                                        //else if (result.event === 'closed') { }

                                        return resolve(result)

                                    },
                                    (error: any) => {

                                        return reject(error);
                                    });

                            } else {
                                return this.OpenInAppBrowser();
                            }
                        });
                }
                if (this.plt.is('android') || this.plt.is('windows')) {
                    return this.OpenInAppBrowser();
                }
                if (this.plt.is('browser')) {
                    this._browserref = window.open(this.Uri, '_blank', "location=yes");
                }

                else {
                    this._browserref = window.open(this.Uri, '_blank', "location=yes");
                }

            }
            else {
                return this.OpenInAppBrowser();
            }


        });

    }

    private OpenInAppBrowser(): Promise<BrowserResponse> {
        return new Promise<BrowserResponse>((resolve, reject) => {
            this._browserref = this.iab.create(this.Uri, this.Target, this.Options)

            if (this._browserref.on("loadstart").subscribe) {

                this._browserref.on("loadstart").subscribe((event) => {

                    let br: BrowserResponse = new BrowserResponse();
                    resolve(br)
                });

                this._browserref.on("loadstop").subscribe((event) => {

                    let br: BrowserResponse = new BrowserResponse();
                    resolve(br)
                });

                this._browserref.on("loaderror").subscribe((event) => {

                    let br: BrowserResponse = new BrowserResponse();
                    reject(br)
                });

                this._browserref.on("exit").subscribe((error) => reject(error));
            }
            else if (this._browserref.addEventListener) {

                this._browserref.addEventListener("loadstart", (event) => {
                    let br: BrowserResponse = new BrowserResponse();
                    resolve(br)
                });
                this._browserref.addEventListener("loadstop", (event) => {
                    let br: BrowserResponse = new BrowserResponse();
                    resolve(br)
                });

                this._browserref.addEventListener("loaderror", function (event) {
                    let br: BrowserResponse = new BrowserResponse();
                    reject(br)
                });
                this._browserref.addEventListener("exit", (error) => reject(error));

            }
            else {
                alert('no event provider')
            }

        });

    }

    public Close(): any {
        if (this._browserref) {
            if (this.plt.is('ios') || this.plt.is('ipad') || this.plt.is('iphone')) {
                if (this._isBrowserSafari)
                    this._browserref.hide();
                else
                    this._browserref.close();
            }
            else {
                this._browserref.close();
            }
        }
    }

}