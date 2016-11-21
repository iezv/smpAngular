import { Component, Input } from '@angular/core';
import { Contact } from '../entities/contact';

@Component({
selector: 'contact-list',
  templateUrl: 'app/contacts/template/contact-list.component.html',
   styleUrls: ['app/contacts/style/contact-list.component.css'],
  })

export class ContactListComponent{
	@Input() contacts: Contact[];
<<<<<<< HEAD

=======
    
>>>>>>> c39437b7d8e63c870fe573a59c22c4a703e0639b
	toggleMarking(contact: Contact){
		console.log(contact.marking);
		contact.marking = !contact.marking;

	}
}