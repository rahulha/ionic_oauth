
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from "../pages/login/login"
import { TabsPage } from '../pages/tabs/tabs';

import { AuthenticationProvider } from '../providers/authentication/authentication';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, Auth: AuthenticationProvider) {
        platform.ready().then(() => {

            Auth.Login().then((isLogin) => {

                if (isLogin)
                    this.rootPage = TabsPage;
                else
                    this.rootPage = LoginPage;
            })

            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
