import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
//==========
import {SideComponent} from './side.component'
import {HeaderComponent} from '../common/component/header.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/admin/app.component.html',
    styleUrls: ['app/admin/app.component.css'],
    directives: [SideComponent,HeaderComponent]
})


export class AppComponent {
    title
    constructor() {
        this.title = 'admin....'
    }

}

