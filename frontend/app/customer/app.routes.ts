import { provideRouter, RouterConfig } from '@angular/router';
//===
import {TemplateComponent} from '../common/component/template-container.component'

export const routes:RouterConfig = [
   {
        path: '',
        component: TemplateComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];