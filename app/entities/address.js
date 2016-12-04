"use strict";
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
//# sourceMappingURL=address.js.map