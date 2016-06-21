import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { Router } from '@angular/router';
//===


@Component({
    selector: 'account',
    templateUrl: 'app/admin/product/product.component.html'
})

export class ProductComponent {
    constructor(private router:Router) {
        console.log("-----")
        console.log(router.toLocaleString)
    }
}
