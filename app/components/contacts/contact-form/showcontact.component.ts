import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact, IAddress, IPhones, IEmails } from '../../../shared/contact.model';

@Component({
	selector: 'show-contact',
    templateUrl: './app/components/contacts/contact-form/template/showcontact.component.html',
    styleUrls: ['./app/components/contacts/contact-form/style/showcontact.component.css'],
})

export class ShowContactComponent{
	showViewForm = true;

	public updateContact(){
		console.log("Update contact!");
		this.showViewForm = true;
	}
  
}