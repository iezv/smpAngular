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
var ContactListComponent = (function () {
    function ContactListComponent() {
        this.showViewForm = true;
    }
    ContactListComponent.prototype.deleteContact = function (i) {
        console.log("Delete contact!");
        this.contacts.splice(i, 1);
    };
    ContactListComponent.prototype.showContact = function (i) {
        console.log("Show contact!");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: './app/contacts/template/contact-list.component.html',
            styleUrls: ['./app/contacts/style/contact-list.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map