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
var core_1 = require('@angular/core');
var login_1 = require('./login');
var hero_service_1 = require('./hero.service');
var LoginFormComponent = (function () {
    function LoginFormComponent(heroService) {
        this.heroService = heroService;
        this.model = new login_1.Login("", "");
        this.submitted = false;
        this.active = true;
    }
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model + "-=");
        this.heroService.dologin(this.model).subscribe(function (res) {
            console.log(res.json());
            var resp = res.json();
            _this.model.email = resp.msg;
        }, function (error) {
            var errMsg = error.message || 'Server error';
            console.error(errMsg); // log to console instead
        });
        this.submitted = true;
    };
    Object.defineProperty(LoginFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/templates/login-form.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map