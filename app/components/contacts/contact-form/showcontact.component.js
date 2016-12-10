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
        this.onUpdated = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
        this.model = new contact_model_1.Contact(0, '', '', '', '', new contact_model_1.Address(0, '', '', '', ''), new contact_model_1.Phones('', '', '', '', ''), new contact_model_1.Emails('', ''), '', '');
    }
    ShowContactComponent.prototype.updateContact = function () {
        console.log('Update contact');
        var contact = new contact_model_1.Contact(this.model.id, this.model.firstname, this.model.lastname, this.model.company, this.model.position, new contact_model_1.Address(this.model.address.postcode, this.model.address.city, this.model.address.street, this.model.address.bld, this.model.address.appart), new contact_model_1.Phones(this.model.phones.prime, this.model.phones.mobile, this.model.phones.work, this.model.phones.fax, this.model.phones.other), new contact_model_1.Emails(this.model.emails.email1, this.model.emails.email2), this.model.skype, this.model.comment);
        console.log(contact);
        this.onUpdated.emit(contact);
    };
    ShowContactComponent.prototype.cancel = function () {
        console.log('Cancel');
        this.onCancel.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShowContactComponent.prototype, "onUpdated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShowContactComponent.prototype, "onCancel", void 0);
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