import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, Address, Phones, Emails } from '../../../shared/contact.model';


@Component({
	selector: 'new-contact',
	templateUrl: './app/components/contacts/contact-form/template/newcontact.component.html',
	styleUrls: ['./app/components/contacts/contact-form/style/newcontact.component.css'],
})

export class NewContactComponent{

	model = new Contact(1, '', '', '', '',new Address(84000,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');

	addContact(){
		console.log('ADD CONTACT');
	}
}