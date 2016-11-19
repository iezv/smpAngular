import { Component } from '@angular/core';
import { OnInit }        from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { ContactListComponent } from './contact-list.component';

@Component({
	//moduleId: module.id,
	selector: 'contactform',
	providers: [ContactService],
	templateUrl: '../app/template/contactform.component.html',
	styleUrls: ['../style/partials/contactform.component.css']
})

export class ContactForm {
	newContact: Contact;
	contactService: ContactService;
  
	submitted = false;
    onSubmit() { this.submitted = true; }

    ngOnInit(): any{
	this.newContact = new Contact('','','','','');
	}
	 get diagnostic() { return JSON.stringify(this.newContact); }

	 addContact(){
	 	this.contactService.addContact (this.newContact);
	 }
}



