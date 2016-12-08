"use strict";
var ContactSeedData = (function () {
    function ContactSeedData() {
    }
    ContactSeedData.prototype.createDb = function () {
        var contacts = [
            { id: 1, firstname: 'Vasya', lastname: 'Ivanov', company: 'Google', position: 'HR',
                address: { postcode: 84000, city: 'TelAviv', street: 'Hercel', bld: '25', appart: '34' },
                phones: { prime: '055-555-55-55', workphone: '055-555-55-55', mobile: '123', fax: '', other: '' },
                emails: { email1: 'vasya@gmail.com', email2: '' }, skype: 'skype1', comment: 'no comment' },
            { id: 2, firstname: 'Petya', lastname: 'Petrov', company: 'Yandex', position: 'CEO',
                address: { postcode: 84000, city: 'TelAviv', street: 'Hercel', bld: '25', appart: '25' },
                phones: { prime: '055-555-55-55', workphone: '055-555-55-55', mobile: '123', fax: '', other: '' },
                emails: { email1: 'vasya@gmail.com', email2: '' }, skype: 'skype1', comment: 'no comment' },
            { id: 3, firstname: 'Motya', lastname: 'Svetlov', company: 'Google', position: 'HR',
                address: { postcode: 84000, city: 'TelAviv', street: 'Hercel', bld: '25', appart: '34' },
                phones: { prime: '055-555-55-55', workphone: '055-555-55-55', mobile: '123', fax: '', other: '' },
                emails: { email1: 'vasya@gmail.com', email2: '' }, skype: 'skype1', comment: 'no comment' },
            { id: 4, firstname: 'Isya', lastname: 'Pupkin', company: 'Amdos', position: 'HR',
                address: { postcode: 84000, city: 'TelAviv', street: 'Hercel', bld: '25', appart: '34' },
                phones: { prime: '055-555-55-55', workphone: '055-555-55-55', mobile: '123', fax: '', other: '' },
                emails: { email1: 'vasya@gmail.com', email2: '' }, skype: 'skype1', comment: 'no comment' },
            { id: 5, firstname: 'Pasha', lastname: 'Pechkin', company: 'Hevra', position: 'Minagel',
                address: { postcode: 84000, city: 'TelAviv', street: 'Hercel', bld: '25', appart: '34' },
                phones: { prime: '055-555-55-55', workphone: '055-555-55-55', mobile: '123', fax: '', other: '' },
                emails: { email1: 'vasya@gmail.com', email2: '' }, skype: 'skype1', comment: 'no comment' },
        ];
        return { contacts: contacts };
    };
    return ContactSeedData;
}());
exports.ContactSeedData = ContactSeedData;
//# sourceMappingURL=contact.data.js.map