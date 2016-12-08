import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, Address, Phones, Emails } from '../../../shared/contact.model';
import { ContactService } from '../../../shared/contact.service';


@Component({
	selector: 'new-contact',
	templateUrl: './app/components/contacts/contact-form/template/newcontact.component.html',
	styleUrls: ['./app/components/contacts/contact-form/style/newcontact.component.css'],
})

export class NewContactComponent{
	@Output() created: EventEmitter<Contact>;
   	model = new Contact(1, '', '', '', '',new Address(84000,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');
	
	@Input() showForm: boolean;

	constructor(){
            this.created = new EventEmitter<Contact>();
	}

	addContact(){
		console.log('ADD CONTACT');
		let contact =
			new Contact(1, 
				        this.model.firstname, 
				        this.model.lastname, 
			            this.model.company, 
			            this.model.position,
			new Address(this.model.address.postcode,
				        this.model.address.city,
				        this.model.address.street,
				        this.model.address.bld,
				        this.model.address.appart),
			new Phones (this.model.phones.prime,
				        this.model.phones.mobile,
				        this.model.phones.work,
				        this.model.phones.fax,
				        this.model.phones.other),
			new Emails (this.model.emails.email1,
				        this.model.emails.email2),
			            this.model.skype,
			            this.model.comment);

		this.model = new Contact(1, '', '', '', '',new Address(0,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');
		
		if(contact!=null){
           this.created.emit(contact);
		}
		console.log(contact);
	}
}