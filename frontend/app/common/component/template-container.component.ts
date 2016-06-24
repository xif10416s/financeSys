import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===


@Component({
    selector: 'smp-template',
    templateUrl: 'app/common/component/template-container.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class TemplateComponent {
    constructor(private router:Router) {
        console.log("---TemplateComponent--")
    }

}