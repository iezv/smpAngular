import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { IContact } from './contact.model';


@Injectable()
export class ContactService {

	private apiUrl = 'api/contacts';
 
	
	constructor (private http: Http){
		console.log('ContactService Initialized...');
	}

	getContacts(): Promise<IContact[]>{
    	return this.http.get(this.apiUrl)
       // return this.http.get('app/shared/contact.json')
		.toPromise()
		.then(res => res.json().data)
        //.then(res => res.json());
		.catch(this.handleError);
	}

	addContact(contact: IContact): Promise<IContact> {
        return this.post(contact);
    }

    updateContact(contact: IContact): Promise<IContact> {
        return this.put(contact);
    }

    deleteContact(contact: IContact): Promise<IContact> {
        return this.delete(contact);
    }

    private post(contact: IContact): Promise<IContact> {
        let body = JSON.stringify(contact);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl, body, options)
                        .toPromise()
                        .then(res => res.json().data)
                       //.catch(this.handleError)
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
