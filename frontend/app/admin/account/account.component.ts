import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { Router } from '@angular/router';
//===


@Component({
    selector: 'account',
    templateUrl: 'app/admin/account/account.component.html'
})

export class AccountComponent {
    constructor(private router:Router) {
        console.log("---AccountComponent--")
        console.log(router.toLocaleString)
    }
}
