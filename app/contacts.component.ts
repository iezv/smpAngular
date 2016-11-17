import { Component } from '@angular/core';
@Component({
  selector: 'contacts',
  templateUrl: 'app/template/contacts.component.html',
  styleUrls: ['style/partials/contacts.component.css']
})

export class ContactsComponent {
  contacts: Contact[];
  constructor(){
  	this.contacts = [
    new Contact(1, 'Vasya','Google','HR','055-555-55-55','email@gmail.com'),
    new Contact(2, 'Petya','Yandex','CEO','055-444-44-44','petya@gmail.com'),
    new Contact(3, 'Motya','HP','Maneger','055-777-77-77','motya@gmail.com'),
    new Contact(4, 'Isya','Amdos','HR','005-553-33-99','izya@gmail.com'),
    new Contact(5, 'Pasha','Hevra','Minagel','058-321-12-34','pasha@gmail.com'),
  	]
  }  
}

export class Contact {
	id: number;
	name: string;
	company: string;
	position: string;
	phone: string;
	email: string;

	constructor(id: number, name: string, 
		company: string, position: string,
		phone: string, email: HTMLInputElement) {
		this.id = id;
		this.name = name;
		this.company = company;
		this.position = position;
		this.phone = phone;
		this.email = email;
	}
}