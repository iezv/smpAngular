import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, Phones, Emails } from '../entities/contact';
import { Address } from '../entities/address';

@Component({
	selector: 'contact-list',
	templateUrl: './app/contacts/template/contact-list.component.html',
	styleUrls: ['./app/contacts/style/contact-list.component.css'],
})

export class ContactListComponent{
  @Input() contacts: Contact [];
  	showViewForm = true;


  public deleteContact(i){
		console.log("Delete contact!");
		this.contacts.splice(i, 1);
	}

	public showContact(i){
		console.log("Show contact!");
	}

  
}