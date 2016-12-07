import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, Phones, Emails } from '../entities/contact';
import { Address } from '../entities/address';

@Component({
	selector: 'new-contact',
	templateUrl: './app/contacts/template/newcontact.component.html',
	styleUrls: ['./app/contacts/style/newcontact.component.css'],
})

export class NewContactComponent{

	model = new Contact(1, '', '', '', '',new Address(84000,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');

	
}