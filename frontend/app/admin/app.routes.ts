import { provideRouter, RouterConfig } from '@angular/router';
//===
import {AccountComponent} from './account/account.component'
import {ProductComponent} from './product/product.component'
import {TemplateComponent} from '../common/component/template-container.component'

export const routes:RouterConfig = [
    {
        path: 'add-account',
        component: AccountComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },{
        path: 'admin.html',
        component: TemplateComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];