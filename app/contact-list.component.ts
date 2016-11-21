import { Component } from '@angular/core';
import { Contact } from './entities/contact';

@Component({
	selector: 'contact-list',
	templateUrl: 'app/template/contact-list.component.html',
	styleUrls: ['app/style/contact-list.component.css']
})

export class ContactListComponent {
	contacts: Contact[];
	title: string;
	model = new Contact(1, '', '', '', '','');
    submitted = false;

	constructor(){
		this.title = "Contacts";
		this.contacts = [
		new Contact(1,'Vasya','Google','HR','055-555-55-55','email@gmail.com'),
		new Contact(2,'Petya','Yandex','CEO','055-444-44-44','petya@gmail.com'),
		new Contact(3,'Motya','HP','Maneger','055-777-77-77','motya@gmail.com'),
		new Contact(4,'Isya','Amdos','HR','005-553-33-99','izya@gmail.com'),
		new Contact(5,'Pasha','Hevra','Minagel','058-321-12-34','pasha@gmail.com'),
		];
	}

	public getContacts(){
		return this.contacts;
	}

	onSubmit() { this.submitted = true; }

		
	public addContact(){
		console.log("Add contact!");
		this.contacts.push(new Contact(this.contacts.length+1, this.model.name, 
			this.model.company, this.model.position,this.model.phone,this.model.email)); 
		this.model = new Contact(1, '', '', '', '','');

	}

}