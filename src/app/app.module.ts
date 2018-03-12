import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from "../pages/login/login";
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { AccountsPage } from '../pages/accounts/accounts'
import { ContactsPage } from '../pages/contacts/contacts';
import { AddNewAccountListPage } from '../pages/add-new-account-list/add-new-account-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SafariViewController } from '@ionic-native/safari-view-controller';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { HttpModule } from "@angular/http";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';


@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        ProfilePage,
        AccountsPage,
        AddNewAccountListPage,
        ContactsPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        ProfilePage,
        AccountsPage,
        AddNewAccountListPage,
        ContactsPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AuthenticationProvider,
        InAppBrowser,
        Deeplinks,
        SafariViewController
    ]
})
export class AppModule { }
