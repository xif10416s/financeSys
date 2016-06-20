import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES } from '@angular2-material/list'

@Component({
    selector: 'my-app',
    templateUrl: 'app/admin/app.component.html',
    styleUrls: ['app/style/app.component.admin.css'],
    directives: [MD_SIDENAV_DIRECTIVES,MD_CHECKBOX_DIRECTIVES,MD_BUTTON_DIRECTIVES,MD_LIST_DIRECTIVES]
})


export class AppComponent {
    title
    constructor() {
        this.title = 'admin....'
    }

}

