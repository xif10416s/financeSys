import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===


@Component({
    selector: 'smp-header',
    templateUrl: 'app/common/component/header.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {
    constructor(private router:Router) {
        console.log("-----")
    }

}
