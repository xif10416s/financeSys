import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import {MdSidenav,MdSidenavLayout} from '@angular2-material/sidenav';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
    selector: 'my-app',
    templateUrl: 'app/admin/app.component.html',
    styleUrls: ['app/style/app.component.admin.css'],
    directives: [ROUTER_DIRECTIVES,MdSidenavLayout,MdSidenav,MdCheckbox,MdButton],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([

])

export class AppComponent {
    title
    constructor() {
        this.title = 'admin....'
    }

}

