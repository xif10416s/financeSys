import { Component ,provide,Inject,OpaqueToken,OnInit}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===

declare var $:any;
@Component({
    selector: 'smp-header',
    templateUrl: 'app/admin/header.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent implements OnInit {

    constructor(private router:Router) {
        console.log("--HeaderComponent---")
    }

    ngOnInit() {

    }

}


