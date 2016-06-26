import { Component ,provide,Inject,Input,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===
import {ViewItem} from '../common/model/viewitem.model'
import {AuthUser} from '../common/model/response.model'
@Component({
    selector: 'smp-side',
    templateUrl: 'app/admin/side.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SideComponent {
    @Input() authUser:AuthUser;
    constructor(private router:Router) {
        console.log("--SideComponent---")
        this.router.navigate(['/admin.html',{}]);
    }

    views = [{
        'title': 'template',
        'path': 'admin/account',
        subview: [{'title': 'topic00', 'path': '/admin.html','role':['ROLE_ADMIN']}, {'title': 'back', 'path': 'account'}]
    },{
        'title': '账号管理',
        'role':['ROLE_ADMIN'],
        subview: [{'title': '新建账号', 'path': '/add-account'}, {'title': 'topic12', 'path': 'account'}]
    }, {
        'title': 'topic2',
        'path': 'admin/product',
        subview: [{'title': 'topic21', 'path': '/product'}, {'title': 'topic22', 'path': 'product','role':['ROLE_ADMIN_SP']}]
    }]


    onSubItemViewClick(v:ViewItem) {
        console.log("----onClick-"+v.path)
        this.router.navigate([v.path,{}]);
    }

    hasAuth(roles:string[]){
        if(roles == null || roles.length == 0){
            return true;
        }
        var hasAuth = false;
        roles.forEach( f=>{
            if(this.authUser.roles.indexOf(f) !=-1){
                hasAuth = true;
            }
        })
        return hasAuth;
    }
}
