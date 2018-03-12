import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { AccountsPage } from '../accounts/accounts';
import { ContactsPage } from '../contacts/contacts';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = ProfilePage;
    tab2Root = AccountsPage;
    tab3Root = ContactsPage;

    constructor() {

    }
}
