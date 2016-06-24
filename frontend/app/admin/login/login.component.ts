import { Component ,Input,Output,EventEmitter}       from '@angular/core';
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
    @Output() onLogin = new EventEmitter();
    constructor(private router:Router) {
        console.log("--LoginComponent---")
    }

    doLogin(){
        this.loginAuthUser ={id:'',email:'',roles:''}
        console.log(this.loginAuthUser)
        this.onLogin.emit(this.loginAuthUser)
    }

}
