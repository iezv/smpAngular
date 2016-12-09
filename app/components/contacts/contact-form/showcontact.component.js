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
var contact_model_1 = require('../../../shared/contact.model');
var ShowContactComponent = (function () {
    function ShowContactComponent() {
        this.model = new contact_model_1.Contact(1, '', '', '', '', new contact_model_1.Address(84000, '', '', '', ''), new contact_model_1.Phones('', '', '', '', ''), new contact_model_1.Emails('', ''), '', '');
    }
    ShowContactComponent.prototype.ngOnInit = function () {
        console.log('URA');
        console.log(this.showed);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ShowContactComponent.prototype, "showed", void 0);
    ShowContactComponent = __decorate([
        core_1.Component({
            selector: 'show-contact',
            templateUrl: './app/components/contacts/contact-form/template/showcontact.component.html',
            styleUrls: ['./app/components/contacts/contact-form/style/showcontact.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ShowContactComponent);
    return ShowContactComponent;
}());
exports.ShowContactComponent = ShowContactComponent;
//# sourceMappingURL=showcontact.component.js.map