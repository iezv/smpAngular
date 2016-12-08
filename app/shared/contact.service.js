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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.apiUrl = 'api/contacts';
        console.log('ContactService Initialized...');
    }
    ContactService.prototype.getContacts = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ContactService.prototype.addContact = function (contact) {
        return this.post(contact);
    };
    ContactService.prototype.updateContact = function (contact) {
        return this.put(contact);
    };
    ContactService.prototype.deleteContact = function (contact) {
        return this.delete(contact);
    };
    ContactService.prototype.post = function (contact) {
        var body = JSON.stringify(contact);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl, body, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ContactService.prototype.put = function (contact) {
        var body = JSON.stringify(contact);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + contact.id;
        return this.http.put(url, body, options)
            .toPromise()
            .then(function (res) { return contact; })
            .catch(this.handleError);
    };
    ContactService.prototype.delete = function (contact) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.apiUrl + "/" + contact.id;
        return this.http.delete(url, options)
            .toPromise()
            .then(function (res) { return contact; })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        console.log('ERROR', error);
        return Promise.reject(error.message || error);
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map