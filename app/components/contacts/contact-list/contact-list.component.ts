import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact, IAddress, IPhones, IEmails } from '../../../shared/contact.model';
import { ContactService } from '../../../shared/contact.service';

@Component({
	selector: 'contact-list',
	templateUrl: './app/components/contacts/contact-list/template/contact-list.component.html',
	styleUrls:  ['./app/components/contacts/contact-list/style/contact-list.component.css'],
})

export class ContactListComponent{
  @Input() contacts: IContact [];
  @Output()deleted: EventEmitter<IContact>;
  showViewForm = true;

  constructor(private contactService: ContactService){
  		this.deleted = new EventEmitter<IContact>();
  }

  onContactDeleted (contact: IContact): void {
  	this.deleted.emit(contact);
  }

  deleteContact(i){
    console.log('Delete contact');
    this.contacts.splice(i, 1);
  }

}