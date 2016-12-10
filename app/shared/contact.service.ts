import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { IContact } from './contact.model';


@Injectable()
export class ContactService {

	private apiUrl = 'api/contacts';

	
	constructor (private http: Http){
		console.log('ContactService Initialized...');
	}

	getContact(contact: IContact): Promise<IContact[]>{
        return this.http.get(this.apiUrl+'/'+contact.id)
          .toPromise()
          .then(res => res.json().data)
          .catch(this.handleError);
    }

    getContacts(): Promise<IContact[]>{
        return this.http.get(this.apiUrl)
          .toPromise()
          .then(res => res.json().data)
          .catch(this.handleError);
    }

    addContact(contact: IContact): Promise<IContact> {
        console.log ('Add contact to server:');
        console.log(contact);
        return  this.post(contact);
    }

    updateContact(contact: IContact): Promise<IContact> {
        console.log ('Update contact on server:');
        console.log (contact);
        return this.put(contact);
    }

    deleteContact(contact: IContact): Promise<IContact> {
        console.log ('Delete contact on server:');
        console.log (contact);
        return this.delete(contact);
    }

    private post(contact: IContact): Promise<IContact> {
        let body = JSON.stringify(contact);
            console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl, body, options)
            .toPromise()
            .then(res => contact)
            .catch(this.handleError)
    }

    private put(contact: IContact): Promise<IContact> {
        let body = JSON.stringify(contact);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${contact.id}`;

        return this.http.put(url, body, options)
        .toPromise()
        .then(res => contact)
        .catch(this.handleError);
    }

    private delete(contact: IContact): Promise<IContact> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${contact.id}`;

        return this.http.delete(url, options)
        .toPromise()
        .then(res => contact)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('ERROR', error);
        return Promise.reject(error.message || error);
    }

}
