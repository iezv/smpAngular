import { Component } from '@angular/core';
import { Contact } from './entities/contact';
import { ContactListComponent } from './contacts/contact-list.component';

@Component({
	selector: 'contacts',
	templateUrl: 'app/template/contacts.component.html',
	styleUrls: ['app/style/contacts.component.css']
})

export class ContactsComponent {
	contacts: Contact[];
	title: string;
	model = new Contact(1, '', '', '', '','');
	showForm = true;

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

	public showFormNewContact(){
		console.log("New contact!");
		this.showForm = false;
	}

	public delContact(){
		console.log("Delete contact!");
		var i=0;
		for(i=0; i<this.contacts.length; i++){
			if (this.contacts[i].marking==true){
				this.contacts.splice(i,i);
			}
		}
	}

	public showContact(){
		console.log("Show contact!");
	}

	public addContact(){
		console.log("Add contact!");
		this.contacts.push(new Contact(this.contacts.length+1, this.model.name, 
			this.model.company, this.model.position,this.model.phone,this.model.email)); 
		this.model = new Contact(1, '', '', '', '','');
		this.showForm = true;
	}

}