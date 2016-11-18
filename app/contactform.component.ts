import { Component } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { Contact } from './contact';

@Component({
	//moduleId: module.id,
	selector: 'contactform',
	templateUrl: 'app/template/contactform.component.html',
	styleUrls: ['style/partials/contactform.component.css']
})

export class ContactForm {
    model = new Contact ();
	submitted = false;
	onSubmit(){this.submitted = true;}

	get diagnostic() 
	{ return JSON.stringify(this.model); }

	newContact() {
		console.log('Add contact!!!');
		console.log(this.model.name);
		this.model = new Contact('', '','','','');
		this.active = false;
		setTimeout(() => this.active = true, 0);

	}

}

