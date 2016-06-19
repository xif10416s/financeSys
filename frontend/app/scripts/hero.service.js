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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var mock_heroes_1 = require('./mock-heroes');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.getHeroes = function () {
        //异步链式调用
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    // See the "Take it slow" appendix
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(mock_heroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
    };
    HeroService.prototype.dologin = function (login) {
        var body = JSON.stringify(login);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(body + "---------");
        return this.http.post("spring/auth/login", body, options);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map