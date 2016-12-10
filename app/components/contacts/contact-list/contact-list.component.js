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
var showcontact_component_1 = require('./../contact-form/showcontact.component');
var ContactListComponent = (function () {
    function ContactListComponent(contactService) {
        this.contactService = contactService;
        this.deleted = new core_1.EventEmitter();
        this.showViewForm = true;
    }
    ContactListComponent.prototype.onContactDeleted = function (contact) {
        this.deleted.emit(contact);
    };
    ContactListComponent.prototype.onContactShowed = function (contact) {
        this.showContactComponent.model = contact;
        if (this.showViewForm == true) {
            this.showViewForm = false;
        }
        else {
            this.showViewForm = true;
        }
        console.log(contact);
    };
    ContactListComponent.prototype.onContactUpdated = function (contact) {
        console.log(contact);
        //this.updated.emit(contact);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ContactListComponent.prototype, "contacts", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ContactListComponent.prototype, "deleted", void 0);
    __decorate([
        core_1.ViewChild(showcontact_component_1.ShowContactComponent), 
        __metadata('design:type', showcontact_component_1.ShowContactComponent)
    ], ContactListComponent.prototype, "showContactComponent", void 0);
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: './app/components/contacts/contact-list/template/contact-list.component.html',
            styleUrls: ['./app/components/contacts/contact-list/style/contact-list.component.css'],
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map