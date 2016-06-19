import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';


import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>',
    styleUrls: ['app/style/app.component.css']
})

@RouteConfig([

])

export class AppComponent {
    title
    constructor() {
        this.title = 'customer....'
    }

}

