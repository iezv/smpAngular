import { Component, EventEmitter, Input, Output, OnInit, ContentChild } from '@angular/core';
import { IContact, IAddress, IPhones, IEmails } from '../../../shared/contact.model';
import { Contact, Address, Phones, Emails } from '../../../shared/contact.model';
import { ContactListComponent } from '../../contacts/contact-list/contact-list.component';
import { ContactService } from '../../../shared/contact.service';

@Component({
	selector: 'show-contact',
    templateUrl: './app/components/contacts/contact-form/template/showcontact.component.html',
    styleUrls: ['./app/components/contacts/contact-form/style/showcontact.component.css'],
   
})

export class ShowContactComponent {
  @Output() onUpdated = new EventEmitter<Contact>();
  @Output() onCancel = new EventEmitter<Contact>();

  model = new Contact(0, '', '', '', '',new Address(0,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');
	
	constructor(){
   }
   
   updateContact(){
     console.log('Update contact');
     let contact =
      new Contact(this.model.id, 
        this.model.firstname, 
        this.model.lastname, 
        this.model.company, 
        this.model.position,
        new Address(this.model.address.postcode,
          this.model.address.city,
          this.model.address.street,
          this.model.address.bld,
          this.model.address.appart),
        new Phones (this.model.phones.prime,
          this.model.phones.mobile,
          this.model.phones.work,
          this.model.phones.fax,
          this.model.phones.other),
        new Emails (this.model.emails.email1,
          this.model.emails.email2),
        this.model.skype,
        this.model.comment);
        console.log(contact);
        this.onUpdated.emit(contact);
}
   
  

   cancel(){
     console.log('Cancel');
     this.onCancel.emit();
   }

}