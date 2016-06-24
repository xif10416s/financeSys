import { Component ,OnInit}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';

//==========
import {HeaderComponent} from './header.component'
import {SideComponent} from './side.component'
import {LoginComponent} from './login/login.component'
import {AuthUser} from '../common/model/ResponseModels'
import {auditTime} from "rxjs/operator/auditTime";

@Component({
    selector: 'my-app',
    templateUrl: 'app/admin/app.component.html',
    styleUrls: ['app/admin/app.component.css'],
    directives: [SideComponent,HeaderComponent,ROUTER_DIRECTIVES,LoginComponent],
    providers: [LoginComponent]
})


export class AppComponent implements OnInit{
    public title:string;
    public authUser:AuthUser ;

    constructor(private router:Router) {
        this.title = 'admin....'
    }

    ngOnInit() {

    }

    onLogin($event){
        console.log($event)
        this.authUser = $event
        this.router.navigate(['',{}]);
    }

}

