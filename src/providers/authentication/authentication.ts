﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

    constructor(public http: Http) {
        console.log('Hello AuthenticationProvider Provider');
    }


    Login(): Promise<any> {

        return new Promise((resolve, reject) => {

            resolve(false);

        })

    }

}