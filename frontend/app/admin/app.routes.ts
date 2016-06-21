import { provideRouter, RouterConfig } from '@angular/router';
//===
import {AccountComponent} from './account/account.component'
import {ProductComponent} from './product/product.component'
export const routes:RouterConfig = [
    {
        path: 'admin/account',
        component: AccountComponent
    },
    {
        path: 'admin/product',
        component: ProductComponent
    },{
        path: '.html',
        component: AccountComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];