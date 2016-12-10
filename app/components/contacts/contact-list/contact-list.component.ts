import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IContact, IAddress, IPhones, IEmails } from '../../../shared/contact.model';
import { ContactService } from '../../../shared/contact.service';
import { Contact, Address, Phones, Emails } from '../../../shared/contact.model';
import { ShowContactComponent } from './../contact-form/showcontact.component';

@Component({
	selector: 'contact-list',
	templateUrl: './app/components/contacts/contact-list/template/contact-list.component.html',
	styleUrls:  ['./app/components/contacts/contact-list/style/contact-list.component.css'],
})

export class ContactListComponent{
  @Input() contacts: IContact [];
  @Output() deleted: EventEmitter<IContact>;
  //@Output() updated: EventEmitter<Contact>;
  showViewForm: boolean;
 
  @ViewChild(ShowContactComponent) showContactComponent: ShowContactComponent

  constructor(private contactService: ContactService){
    this.deleted = new EventEmitter<IContact>();
    this.showViewForm = true;
  }

  onContactDeleted (contact: IContact): void {
    this.deleted.emit(contact);
  }
  
  onContactShowed(contact: IContact): void{
    this.showContactComponent.model = contact;
   
    if (this.showViewForm==true){
      this.showViewForm = false;
    }else{
      this.showViewForm = true;
    }
      console.log(contact);
  }

  onContactUpdated(contact: IContact): void{
    console.log(contact);
    //this.updated.emit(contact);
  }

  
}






