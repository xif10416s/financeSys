import { Component ,Input,Output,EventEmitter,OnInit}       from '@angular/core';
import { NgForm }    from '@angular/common';
//===
import {AuthUser,AuthResponse,RespCode} from '../../common/model/response.model'
import {LoginService} from './login.service'
import { LoginInfo }    from './login.model';
import {Dialog} from '../../common/component/dialog.component'
declare var $:any;
@Component({
    selector: 'smp-login',
    templateUrl: 'app/admin/login/login.component.html'
})

export class LoginComponent implements OnInit {
    //@Input() loginAuthUser:AuthUser;
    @Output() onLogin = new EventEmitter();
    submitted = false;
    loginInfo:LoginInfo;
    errorMsg:string;

    constructor(private loginService:LoginService, private dialog:Dialog) {
        console.log("--LoginComponent---")
    }

    doLogin() {
        console.log(this.loginInfo)
        this.loginService.dologin(this.loginInfo).subscribe(res => {
            console.log(res.json())
            var resp = <AuthResponse>res.json()
            if (resp.code == RespCode.Success) {
                this.onLogin.emit(resp.user)
            } else {
                console.log($("#normalModal"))
                this.dialog.openDialog("出错了", resp.msg)
            }
        }, error => {
            let errMsg = error.message || 'Server error';
            console.error(errMsg); // log to console instead
        })
        this.submitted = true;

    }

    ngOnInit() {
        this.loginInfo = new LoginInfo("test@163.com", "111111");
    }

}
