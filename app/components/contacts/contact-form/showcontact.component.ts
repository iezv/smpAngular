import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact, IAddress, IPhones, IEmails } from '../../../shared/contact.model';
import { ContactService } from '../../../shared/contact.service';



@Component({
	selector: 'show-contact',
    templateUrl: './app/components/contacts/contact-form/template/showcontact.component.html',
    styleUrls: ['./app/components/contacts/contact-form/style/showcontact.component.css'],
})

export class ShowContactComponent{
	@Input() showViewForm: boolean;

	constructor(private contactService: ContactService){
  	
  }

	public updateContact(){
		console.log("Update contact!");
		this.showViewForm = true;
	}
  
}