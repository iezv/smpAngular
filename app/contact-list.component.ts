
import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector:    'contact-list',
  templateUrl: 'app/template/contact-list.component.html',
  styleUrls:   ['style/partials/contact-list.component.css'],
  providers:  [ ContactService ]
})

export class ContactListComponent implements OnInit {

	
	contacts: Contact[];
	selectedContact: Contact;

	constructor(private service: ContactService) { }

	ngOnInit() {
		this.contacts = this.service.getContacts();
	}

	selectContact(contact: Contact) {
		this.selectedContact = contact; 
	}
    
 }