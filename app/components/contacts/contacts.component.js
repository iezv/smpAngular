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
var contact_service_1 = require('../../shared/contact.service');
var ContactsComponent = (function () {
    function ContactsComponent(contactService) {
        this.contactService = contactService;
        this.title = "Contacts";
        this.showForm = true;
        this.showViewForm = true;
        this.buttAdd = false;
        this.contacts = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactsComponent.prototype.onContactCreated = function (contact) {
        var _this = this;
        if (contact.id == 0 || contact.id == null || contact.firstname == '' || contact.firstname == null) {
            this.showformnewcomtact();
            return;
        }
        this.contactService.addContact(contact).then(function (contact) { return _this.addContact(contact); });
    };
    ContactsComponent.prototype.onContactUpdated = function (contact) {
        this.contactService.updateContact(contact).then(function (contact) { });
    };
    ContactsComponent.prototype.onContactDeleted = function (contact) {
        var _this = this;
        this.contactService.deleteContact(contact).then(function (contact) { return _this.deleteContact(contact); });
    };
    ContactsComponent.prototype.onContactShowed = function (contact) {
        console.log(contact);
        if (this.showViewForm == true) {
            this.buttAdd = true;
            this.showViewForm = false;
        }
        else {
            this.buttAdd = false;
            this.showViewForm = true;
        }
        this.contactService.getContact(contact);
    };
    ContactsComponent.prototype.showformnewcomtact = function () {
        if (this.showForm == true) {
            this.showForm = false;
        }
        else {
            this.showForm = true;
        }
    };
    ContactsComponent.prototype.addContact = function (contact) {
        this.contacts.push(contact);
        this.showformnewcomtact();
    };
    ContactsComponent.prototype.deleteContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts.splice(index, 1);
        }
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts',
            templateUrl: './app/components/contacts/template/contacts.component.html',
            styleUrls: ['./app/components/contacts/style/contacts.component.css'],
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map