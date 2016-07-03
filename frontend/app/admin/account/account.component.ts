import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { Router } from '@angular/router';
//===
import {ProgressBar} from '../../common/component/progress-bar.component'
import {AdminUser} from "./adminUser.model"
import {Response,RespCode} from '../../common/model/response.model'
import {AccountService} from './account.service'
import {Dialog} from '../../common/component/dialog.component'
declare var $: any;
@Component({
    selector: 'account',
    templateUrl: 'app/admin/account/account.component.html',
    providers:[AccountService]
})

export class AccountComponent {
    adminUser:AdminUser = new AdminUser();
    AUTHS = [{title:'系统管理员',value:'ROLE_ADMIN'},{title:'运营管理员',value:'ROLE_OPERATOR'},{title:'商务管理员',value:'ROLE_BUSINESS'}]
    authCheckBoxes = {'ROLE_ADMIN':false,'ROLE_OPERATOR':false,'ROLE_BUSINESS':false}
    submitted = false;
    constructor(private router:Router,private progressBar:ProgressBar,private accountService:AccountService,private dialog:Dialog) {
        console.log("---AccountComponent--")
        console.log(router.toLocaleString)
    }


    addAdminUser(){
        this.adminUser.role=[]
        for(var prop in this.authCheckBoxes){
            if(this.authCheckBoxes[prop]){
                this.adminUser.role.push(prop)
            }
        }
        console.log(this.adminUser.role)
        this.accountService.addAddminUser(this.adminUser).subscribe(res => {
            console.log(res.json())
            var resp = <Response>res.json()
            if(resp.code == RespCode.Success){

            } else {
                this.dialog.openDialog("出错",resp.msg)
            }
        }, error =>{
            let errMsg = error.message || 'Server error';
            console.error(errMsg); // log to console instead
        })
        this.submitted = true;

    }

}
