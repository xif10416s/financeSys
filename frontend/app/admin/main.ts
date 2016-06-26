import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';
import { Title } from '@angular/platform-browser';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import { AppComponent } from './app.component';
import {ProgressBar} from '../common/component/progress-bar.component'

bootstrap(AppComponent,[HTTP_PROVIDERS,Title,APP_ROUTER_PROVIDERS,ProgressBar]);