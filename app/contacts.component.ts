import { Component } from '@angular/core';
import { ContactListComponent } from './contacts/contact-list.component';
import { NewContactComponent } from './contacts/newcontact.component';
import { ShowContactComponent } from './contacts/showcontact.component';
import { Contact, Phones, Emails } from './entities/contact';
import { Address } from './entities/address';
import { ContactService } from './services/contact.service';


@Component({
	selector: 'contacts',
	templateUrl: 'app/template/contacts.component.html',
	styleUrls: ['app/style/contacts.component.css'],
	providers: [ContactService]
})

export class ContactsComponent {
	contacts: Contact[];
	title: string;
	showForm = true;

	constructor(private contactService: ContactService){
		this.title = "Contacts";
		this.contacts = [
		new Contact(1,'Vasya','Ivanov','Google','HR', 
			new Address(84000,'TelAviv','Hercel','25','34'),
			new Phones('055-555-55-55','055-555-55-55','','',''),
			new Emails('vasya@gmail.com',''), 'skype1', 'no comment'),
	    new Contact(2,'Petya','Petrov','Yandex','CEO', 
			new Address(84000,'TelAviv','Hercel','25','34'),
			new Phones('055-444-44-44','055-555-55-55','','',''),
			new Emails('petya@gmail.com',''), 'skype2', 'no comment'),
		new Contact(3,'Motya','Svetlov','HP','Maneger', 
			new Address(84000,'TelAviv','Hercel','25','34'),
			new Phones('055-777-77-77','055-777-77-77','','',''),
			new Emails('motya@gmail.com',''), 'skype2', 'no comment'),
		new Contact(4,'Isya','Pupkin','Amdos','HR', 
			new Address(84000,'TelAviv','Hercel','25','34'),
			new Phones('005-553-33-99','','005-553-33-99','',''),
			new Emails('izya@gmail.com',''), 'skype2', 'no comment'),
        new Contact(5,'Pasha','Pechkin','Hevra','Minagel', 
			new Address(84000,'TelAviv','Hercel','25','34'),
			new Phones('058-321-12-34','058-321-12-34','','',''),
			new Emails('pasha@gmail.com',''), 'skype2', 'no comment'),
		];
		this.contactService.getContacts().subscribe(contacts => {
			this.contacts = contacts;
		});
			}

	public showFormNewContact(){
		console.log("New contact!");
		if (this.showForm == true){
			this.showForm = false;
		} else {
			this.showForm = true;
		}
	}

}

