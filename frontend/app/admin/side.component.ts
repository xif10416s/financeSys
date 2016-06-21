import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';


import { Title } from '@angular/platform-browser';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES } from '@angular2-material/list'
//===
import {ViewItem} from '../common/model/ViewItem'


@Component({
    selector: 'admin-side-nav',
    templateUrl: 'app/admin/side.component.html',
    styleUrls: ['app/admin/side.component.css'],
    directives: [MD_CHECKBOX_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES,ROUTER_DIRECTIVES]
})

export class SideComponent {
    title = "aaa";
    activityView:ViewItem;
    views = [{
        'title': 'topic1',
        'path': 'admin/account',
        subview: [{'title': 'topic11', 'path': 't11'}, {'title': 'topic12', 'path': 't12'}]
    }, {
        'title': 'topic2',
        'path': 'admin/product',
        subview: [{'title': 'topic21', 'path': 't21'}, {'title': 'topic22', 'path': 't22'}]
    }]


    constructor(private router:Router) {
        console.log("-----")
        console.log(router.toLocaleString())
    }

    onClick(v:ViewItem) {
        console.log("----onClick-"+v.path)
        this.router.navigate([v.path,{}]);
    }

}
