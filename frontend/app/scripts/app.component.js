"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_form_component_1 = require('./hero-form.component');
var app_config_1 = require('./app-config');
var highlight_directive_1 = require('./highlight.directive');
var login_form_component_1 = require('./login-form.component');
var dynamic_form_component_1 = require('./dynamic-form/dynamic-form.component');
var question_service_1 = require('./dynamic-form/question.service');
var checkbox_component_1 = require('./ag2-Material/checkbox.component');
var platform_browser_1 = require('@angular/platform-browser');
exports.APP_CONFIG = new core_1.OpaqueToken('app.config');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent(config, service, titleService) {
        this.titleService = titleService;
        this.title = config.title;
        this.questions = service.getQuestions();
        titleService.setTitle(config.apiEndpoint);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.component.html',
            styleUrls: ['app/style/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, hero_form_component_1.HeroFormComponent, highlight_directive_1.HighlightDirective, login_form_component_1.LoginFormComponent, dynamic_form_component_1.DynamicForm, checkbox_component_1.MdCheckBox],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                hero_service_1.HeroService,
                core_1.provide(exports.APP_CONFIG, { useValue: app_config_1.CONFIG }), question_service_1.QuestionService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent
            },
            {
                path: '/heroes',
                name: 'Heroes',
                component: heroes_component_1.HeroesComponent
            },
            {
                path: '/mdcheckbox',
                name: 'Mdcheckbox',
                component: checkbox_component_1.MdCheckBox
            }
        ]),
        __param(0, core_1.Inject(exports.APP_CONFIG)), 
        __metadata('design:paramtypes', [Object, question_service_1.QuestionService, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map