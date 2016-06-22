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
        console.log(router.toLocaleString)
    }

    onSidebarToggleLG(){
        if($('.wrapper').hasClass('display-right'))	{
            $('.wrapper').removeClass('display-right');
            $('.sidebar-right').removeClass('active');
        }
        else	{
            //$('.nav-header').toggleClass('hide');
            $('.top-nav').toggleClass('sidebar-mini');
            $('aside').toggleClass('sidebar-mini');
            $('footer').toggleClass('sidebar-mini');
            $('.main-container').toggleClass('sidebar-mini');

            $('.main-menu').find('.openable').removeClass('open');
            $('.main-menu').find('.submenu').removeAttr('style');
        }
    }

    onSidebarToggleSM(){
        $('aside').toggleClass('active');
        $('.wrapper').toggleClass('display-left');
    }
}
