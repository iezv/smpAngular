import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact, IAddress, IPhones, IEmails } from '../../../shared/contact.model';

@Component({
	selector: 'contact-list',
	templateUrl: './app/components/contacts/contact-list/template/contact-list.component.html',
	styleUrls:  ['./app/components/contacts/contact-list/style/contact-list.component.css'],
})

export class ContactListComponent{
  @Input() contacts: IContact [];
  @Output()toggled: EventEmitter<IContact>;
  @Output()deleted: EventEmitter<IContact>;
  showViewForm = true;

  constructor(){
  	this.toggled = new EventEmitter<IContact>();
  	this.deleted = new EventEmitter<IContact>();
  }

  onContactToggled (contact: IContact): void {
  	this.toggled.emit(contact);
  }
  onContactDeleted (contact: IContact): void {
  	this.toggled.emit(contact);
  }

}