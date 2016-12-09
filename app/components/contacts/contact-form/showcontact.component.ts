import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IContact, IAddress, IPhones, IEmails } from '../../../shared/contact.model';
import { Contact, Address, Phones, Emails } from '../../../shared/contact.model';
import { ContactService } from '../../../shared/contact.service';


@Component({
	selector: 'show-contact',
    templateUrl: './app/components/contacts/contact-form/template/showcontact.component.html',
    styleUrls: ['./app/components/contacts/contact-form/style/showcontact.component.css'],
})

export class ShowContactComponent implements OnInit {
	@Input() showed: EventEmitter<Contact>;

    model = new Contact(1, '', '', '', '',new Address(84000,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');
	
	constructor(){
  	    	  
  }

  ngOnInit() {
  	 console.log('URA');
  	 console.log(this.showed);

  }

	 
}