import { provideRouter, RouterConfig } from '@angular/router';
//===
import {AccountComponent} from './account/account.component'
import {ProductComponent} from './product/product.component'
import {TemplateComponent} from '../common/component/template-container.component'
import {ViewItem} from "../common/model/viewitem.model";

export const routes:RouterConfig = <RouterConfig>[
    {
        path: 'add-account',
        component: AccountComponent
    },
    {
        path: 'product',
        component: ProductComponent
    }, {
        path: 'admin.html',
        component: TemplateComponent
    }
];

export const VIEWS:ViewItem[] = [{
    'title': 'template',
    'role': ['ROLE_USER'],
    subview: [{'title': 'topic00', 'path': '/admin.html', 'role': ['ROLE_USER']}, {
        'title': 'back',
        'path': 'account',
        'role': ['ROLE_ADMIN']
    }]
}, {
    'title': '账号管理',
    'role': ['ROLE_ADMIN'],
    subview: [{'title': '新建账号', 'path': '/add-account', 'role': ['ROLE_ADMIN']}, {
        'title': 'topic12',
        'path': 'account',
        'role': ['ROLE_ADMIN']
    }]
}, {
    'title': 'topic2',
    'role': ['ROLE_USER'],
    subview: [{'title': 'topic21', 'path': '/product', 'role': ['ROLE_USER']}, {
        'title': 'topic22',
        'path': 'product',
        'role': ['ROLE_ADMIN_SP']
    }]
}]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];