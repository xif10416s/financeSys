import { Component ,provide,Inject,OpaqueToken}       from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
//===


@Component({
    selector: 'smp-side',
    templateUrl: 'app/common/component/side.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SideComponent {
    constructor(private router:Router) {
        console.log("-----")
        console.log(router.toLocaleString)
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


    onFirstLinkClick($event){
        console.log("onclick..........."+$event.target)
        if(!$('aside').hasClass('sidebar-mini') || Modernizr.mq('(max-width: 991px)'))	{
            if( $($event.target).parent().children('.submenu').is(':hidden') ) {
                $($event.target).parent().siblings().removeClass('open').children('.submenu').slideUp(200);
                $($event.target).parent().addClass('open').children('.submenu').slideDown(200);
            }
            else	{
                $($event.target).parent().removeClass('open').children('.submenu').slideUp(200);
            }
        }
        return false;
    }

    onSubItemViewClick(v:ViewItem) {
        console.log("----onClick-"+v.path)
        this.router.navigate([v.path,{}]);
    }
}
