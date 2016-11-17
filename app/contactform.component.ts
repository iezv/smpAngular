import { Component } from '@angular/core';
import { Contact } from './contacts.component';

@Component({
	selector: 'contactform',
	templateUrl: 'app/template/contactform.component.html',
	styleUrls: ['style/partials/contactform.component.css']
})

export class ContactForm {
	model = new Contact (1,'name','company','position','phone','email');
	submitted = false;
	onSubmit(){this.submitted = true;}

	newContact (){
		this.model = new Contact();
		this.active = false;
		setTimeout(() => this.active = true, 0);
		

	}

}
