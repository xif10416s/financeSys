import { Component ,provide,Inject,Input,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===
import {ViewItem} from '../common/model/viewitem.model'
import {AuthUser} from '../common/model/response.model'
import {VIEWS} from './app.routes'

@Component({
    selector: 'smp-side',
    templateUrl: 'app/admin/side.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SideComponent {
    @Input() authUser:AuthUser;
    views = VIEWS;
    constructor(private router:Router) {
        console.log("--SideComponent---")
        this.router.navigate(['/admin.html',{}]);
    }


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
