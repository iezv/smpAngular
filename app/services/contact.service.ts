import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import { Contact, Phones, Emails } from '../entities/contact';
import { Address } from '../entities/address';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

	private _contacts = new Subject<Contact>();
	
	constructor (private http: Http){
		console.log('ContactService Initialized...');
	}

	getContacts(){
		return this.http.get('http://localhost:8080/contacts')
		.map(res => res.json());
	}

	delete(id:number): void{
         this.http.delete('http://localhost:8080/delete/contact?id='+id)
         .subscribe((res: Response) => {
             
         });
	}

	post(): void {
		this.http.post('http://localhost:8080/addcontact',
			JSON.stringify({
         }))
         .subscribe((res: Response) => {
             
         });

	}


}
 