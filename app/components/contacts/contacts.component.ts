import { Component, OnInit } from '@angular/core';

import { IContact, IPhones, IEmails, IAddress } from '../../shared/contact.model';
import { ContactService } from '../../shared/contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './contact-form/newcontact.component';
import { ShowContactComponent } from './contact-form/showcontact.component';


@Component({
	selector: 'contacts',
	templateUrl: './app/components/contacts/template/contacts.component.html',
	styleUrls:  ['./app/components/contacts/style/contacts.component.css']   ,

})

export class ContactsComponent implements OnInit {
	contacts: IContact[];
	showForm: boolean;
    showViewForm: boolean;
    title: string;

    constructor(private contactService: ContactService){
        this.title = "Contacts";
        this.showForm = true;
        this.showViewForm=true;
        this.contacts = [];
    }

    ngOnInit() {
        this.contactService.getContacts().then(contacts => this.contacts = contacts);
    }
    
    onContactCreated(contact: IContact): void {
        if (contact.id == 0 || contact.id ==null || contact.firstname == '' || contact.firstname ==null)
             { this.showformnewcomtact();
                 return; }
        this.contactService.addContact(contact).then(contact => this.addContact(contact));
   
    }

    onContactUpdated(contact: IContact): void {
        this.contactService.updateContact(contact).then(contact => {});
    }

    onContactDeleted(contact: IContact): void {
        this.contactService.deleteContact(contact).then(contact => this.deleteContact(contact));
    }

    showformnewcomtact(){
        if (this.showForm == true){
            this.showForm = false;
        } else {
            this.showForm = true;
        }
    }

    private addContact(contact: IContact): void {
        this.contacts.push(contact);
        this.showformnewcomtact();
    }

    private deleteContact(contact: IContact): void {
        let index = this.contacts.indexOf(contact);
        if (index > -1) {
            this.contacts.splice(index, 1);
        }
    }
}

