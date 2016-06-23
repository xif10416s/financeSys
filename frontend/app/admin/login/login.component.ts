import { Component ,Input}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===
import {AuthUser} from '../../common/model/ResponseModels'
@Component({
    selector: 'smp-login',
    templateUrl: 'app/admin/login/login.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
    @Input() loginAuthUser:AuthUser;
    constructor(private router:Router) {
        console.log("-----")
    }

    ontest(){
        this.loginAuthUser ={id:'',email:'',roles:''}
        alert(this.loginAuthUser)
    }

}
