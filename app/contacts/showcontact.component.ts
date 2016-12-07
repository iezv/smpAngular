import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, Phones, Emails } from '../entities/contact';
import { Address } from '../entities/address';

@Component({
	selector: 'show-contact',
	templateUrl: './app/contacts/template/showcontact.component.html',
	styleUrls: ['./app/contacts/style/showcontact.component.css'],
})

export class ShowContactComponent{
	showViewForm = true;

	public updateContact(){
		console.log("Update contact!");
		this.showViewForm = true;
	}
  
}