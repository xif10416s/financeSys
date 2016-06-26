import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { Router } from '@angular/router';
//===
import {ProgressBar} from '../../common/component/progress-bar.component'
import {AdminUser} from "./adminUser.model"
import {Response,RespCode} from '../../common/model/response.model'
import {AccountService} from './account.service'
declare var $: any;
@Component({
    selector: 'account',
    templateUrl: 'app/admin/account/account.component.html'
})

export class AccountComponent {
    adminUser:AdminUser;
    submitted = false;
    constructor(private router:Router,private progressBar:ProgressBar,private accountService:AccountService) {
        console.log("---AccountComponent--")
        console.log(router.toLocaleString)
    }

    startProgressBar(){
        this.progressBar.onProgressing();
    }

    stopProgressBar(){
        this.progressBar.stopProgress();
    }


    addAdminUser(){
        this.accountService.addAddminUser(this.adminUser).subscribe(res => {
            console.log(res.json())
            var resp = <Response>res.json()
            if(resp.code == RespCode.Success){
            } else {

                $("#normalModal").modal('toggle');
            }
        }, error =>{
            let errMsg = error.message || 'Server error';
            console.error(errMsg); // log to console instead
        })
        this.submitted = true;

    }
}
