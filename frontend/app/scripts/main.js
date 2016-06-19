"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, platform_browser_1.Title]);
//# sourceMappingURL=main.js.map