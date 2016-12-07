"use strict";
var ContactViewService = (function () {
    function ContactViewService() {
    }
    ContactViewService.prototype.addContact = function () {
        console.log("Add contact!");
        this.contacts.push(new Contact(this.contacts.length + 1, this.model.firstname, this.model.lastname, this.model.company, this.model.position, new Address(this.model.address.postcode, this.model.address.city, this.model.address.street, this.model.address.bld, this.model.address.appart), new Phones(this.model.phones.prime, this.model.phones.mobile, this.model.phones.work, this.model.phones.fax, this.model.phones.other), new Emails(this.model.emails.email1, this.model.emails.email2), this.model.skype, this.model.comment));
        this.model = new Contact(1, '', '', '', '', new Address(0, '', '', '', ''), new Phones('', '', '', '', ''), new Emails('', ''), '', '');
        this.showForm = true;
    };
    return ContactViewService;
}());
exports.ContactViewService = ContactViewService;
//# sourceMappingURL=contact-view.service.js.map