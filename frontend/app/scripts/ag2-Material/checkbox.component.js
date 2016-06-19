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
var checkbox_1 = require('@angular2-material/checkbox');
var MdCheckBox = (function () {
    function MdCheckBox() {
        this.user = {
            agreesToTOS: false
        };
        this.isIndeterminate = false;
        this.groceries = [
            { name: 'Seitan', bought: false },
            { name: 'Almond Meal Flour', bought: false },
            { name: 'Organic Eggs', bought: false }
        ];
    }
    MdCheckBox.prototype.onSubmit = function (e) {
        e.preventDefault();
        alert('submitted!');
    };
    MdCheckBox = __decorate([
        core_1.Component({
            selector: 'test-md-checkbox',
            template: "\n    <h1>Checkbox Demo</h1>\n    <section>\n      <h2>Standalone Usage</h2>\n      <h3>Shopping List</h3>\n      <ul>\n        <li *ngFor=\"#grocery of groceries\">\n          <md-checkbox [checked]=\"grocery.bought\"\n                       (change)=\"grocery.bought = $event\">\n            {{grocery.name}}\n          </md-checkbox>\n        </li>\n      </ul>\n    </section>\n\n    <section>\n      <h2>Usage Within a Form</h2>\n      <form (submit)=\"onSubmit($event)\">\n        <md-checkbox [(ngModel)]=\"user.agreesToTOS\" #tos>\n          I agree to the Terms of Service\n        </md-checkbox>\n        <div>\n          <button type=\"submit\" [disabled]=\"!user.agreesToTOS\">Submit</button>\n        </div>\n      </form>\n    </section>\n\n    <section>\n      <h2>Indeterminate (\"Mixed\") Mode</h2>\n      <md-checkbox [checked]=\"false\"\n                   [indeterminate]=\"isIndeterminate\"\n                   (change)=\"isIndeterminate = false\">\n        Click the Button to Make Me Indeterminate\n      </md-checkbox>\n      <button type=\"button\" (click)=\"isIndeterminate = true\">\n        Make Indeterminate\n      </button>\n    </section>\n    <section>\n      <h2>Alignment</h2>\n      <md-checkbox [checked]=\"true\">I come before my label</md-checkbox>\n      <br/><br/>\n      <md-checkbox [checked]=\"true\" align=\"end\">\n        I come after my label.\n      </md-checkbox>\n    </section>\n  ",
            styles: ["\n    ul {\n      padding-left: 0;\n    }\n    ul > li {\n      padding-left: 1em;\n      list-style-type: none;\n    }\n    form {\n      border-radius: 4px;\n      border: 1px solid black;\n      padding: 1em;\n    }\n    form > div {\n      margin-top: 1em;\n    }\n  "],
            directives: [checkbox_1.MdCheckbox]
        }), 
        __metadata('design:paramtypes', [])
    ], MdCheckBox);
    return MdCheckBox;
}());
exports.MdCheckBox = MdCheckBox;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=checkbox.component.js.map