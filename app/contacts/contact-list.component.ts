import { Component, Input } from '@angular/core';
import { Contact } from '../entities/contact';

@Component({
selector: 'contact-list',
  templateUrl: 'app/contacts/template/contact-list.component.html',
   styleUrls: ['app/contacts/style/contact-list.component.css'],
  })

export class ContactListComponent{
	@Input() contacts: Contact[];
}