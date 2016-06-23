import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//==========
import {HeaderComponent} from './header.component'
import {SideComponent} from './side.component'
@Component({
    selector: 'my-app',
    templateUrl: 'app/admin/app.component.html',
    styleUrls: ['app/admin/app.component.css'],
    directives: [SideComponent,HeaderComponent,ROUTER_DIRECTIVES]
})


export class AppComponent {
    title
    constructor() {
        this.title = 'admin....'
    }

}

