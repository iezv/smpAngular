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
var contact_service_1 = require('../../../shared/contact.service');
var ShowContactComponent = (function () {
    function ShowContactComponent(contactService) {
        this.contactService = contactService;
    }
    ShowContactComponent.prototype.updateContact = function () {
        console.log("Update contact!");
        this.showViewForm = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ShowContactComponent.prototype, "showViewForm", void 0);
    ShowContactComponent = __decorate([
        core_1.Component({
            selector: 'show-contact',
            templateUrl: './app/components/contacts/contact-form/template/showcontact.component.html',
            styleUrls: ['./app/components/contacts/contact-form/style/showcontact.component.css'],
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ShowContactComponent);
    return ShowContactComponent;
}());
exports.ShowContactComponent = ShowContactComponent;
//# sourceMappingURL=showcontact.component.js.map