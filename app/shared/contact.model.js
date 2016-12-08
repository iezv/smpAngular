"use strict";
var Contact = (function () {
    function Contact(id, firstname, lastname, company, position, address, phones, emails, skype, comment) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.company = company;
        this.position = position;
        this.address = address;
        this.phones = phones;
        this.emails = emails;
        this.skype = skype;
        this.comment = comment;
    }
    return Contact;
}());
exports.Contact = Contact;
var Emails = (function () {
    function Emails(email1, email2) {
        this.email1 = email1;
        this.email2 = email2;
    }
    return Emails;
}());
exports.Emails = Emails;
var Phones = (function () {
    function Phones(prime, mobile, work, fax, other) {
        this.prime = prime;
        this.mobile = mobile;
        this.work = work;
        this.fax = fax;
        this.other = other;
    }
    return Phones;
}());
exports.Phones = Phones;
var Address = (function () {
    function Address(postcode, city, street, bld, appart) {
        this.postcode = postcode;
        this.city = city;
        this.street = street;
        this.bld = bld;
        this.appart = appart;
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=contact.model.js.map