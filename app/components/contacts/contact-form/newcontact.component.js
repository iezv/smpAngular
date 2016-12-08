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
var NewContactComponent = (function () {
    function NewContactComponent() {
        this.model = new contact_model_1.Contact(1, '', '', '', '', new contact_model_1.Address(84000, '', '', '', ''), new contact_model_1.Phones('', '', '', '', ''), new contact_model_1.Emails('', ''), '', '');
        this.created = new core_1.EventEmitter();
    }
    NewContactComponent.prototype.addContact = function () {
        console.log('ADD CONTACT');
        var contact = new contact_model_1.Contact(1, this.model.firstname, this.model.lastname, this.model.company, this.model.position, new contact_model_1.Address(this.model.address.postcode, this.model.address.city, this.model.address.street, this.model.address.bld, this.model.address.appart), new contact_model_1.Phones(this.model.phones.prime, this.model.phones.mobile, this.model.phones.work, this.model.phones.fax, this.model.phones.other), new contact_model_1.Emails(this.model.emails.email1, this.model.emails.email2), this.model.skype, this.model.comment);
        this.model = new contact_model_1.Contact(1, '', '', '', '', new contact_model_1.Address(0, '', '', '', ''), new contact_model_1.Phones('', '', '', '', ''), new contact_model_1.Emails('', ''), '', '');
        if (contact != null) {
            this.created.emit(contact);
        }
        console.log(contact);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NewContactComponent.prototype, "created", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NewContactComponent.prototype, "showForm", void 0);
    NewContactComponent = __decorate([
        core_1.Component({
            selector: 'new-contact',
            templateUrl: './app/components/contacts/contact-form/template/newcontact.component.html',
            styleUrls: ['./app/components/contacts/contact-form/style/newcontact.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], NewContactComponent);
    return NewContactComponent;
}());
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=newcontact.component.js.map