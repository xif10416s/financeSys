import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===
import {ViewItem} from '../common/model/ViewItem'

@Component({
    selector: 'smp-side',
    templateUrl: 'app/admin/side.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SideComponent {
    constructor(private router:Router) {
        console.log("--SideComponent---")
        this.router.navigate(['/admin.html',{}]);
    }

    views = [{
        'title': 'topic1',
        'path': 'admin/account',
        subview: [{'title': 'topic11', 'path': '/account'}, {'title': 'topic12', 'path': 'account'}]
    }, {
        'title': 'topic2',
        'path': 'admin/product',
        subview: [{'title': 'topic21', 'path': '/product'}, {'title': 'topic22', 'path': 'product'}]
    }]


    onSubItemViewClick(v:ViewItem) {
        console.log("----onClick-"+v.path)
        this.router.navigate([v.path,{}]);
    }
}
