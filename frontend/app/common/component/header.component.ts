import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { Router } from '@angular/router';
//===


@Component({
    selector: 'smp-header',
    templateUrl: 'app/common/component/header.component.html'
})

export class HeaderComponent {
    constructor(private router:Router) {
        console.log("-----")
        console.log(router.toLocaleString)
    }
}
