import { Component ,OnInit}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//==========
import {HeaderComponent} from './header.component'
import {SideComponent} from './side.component'
import {LoginComponent} from './login/login.component'
import {AuthUser} from '../common/model/ResponseModels'

@Component({
    selector: 'my-app',
    templateUrl: 'app/admin/app.component.html',
    styleUrls: ['app/admin/app.component.css'],
    directives: [SideComponent,HeaderComponent,ROUTER_DIRECTIVES,LoginComponent],
    providers: [LoginComponent]
})


export class AppComponent implements OnInit{
    public title:string;
    public authUser:AuthUser;

    constructor() {
        this.title = 'admin....'
    }

    ngOnInit() {

    }

}

