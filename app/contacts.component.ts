import { Component } from '@angular/core';
import { Contact, Phones, Emails } from './entities/contact';
import { Address } from './entities/address';

@Component({
	selector: 'contacts',
	templateUrl: 'app/template/contacts.component.html',
	styleUrls: ['app/style/contacts.component.css']
})

export class ContactsComponent {
	contacts: Contact[];
	title: string;
	model = new Contact(1, '', '', '', '',new Address(0,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');
	showForm = true;
	showViewForm = true;

	constructor(){
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
	}

	public showFormNewContact(){
		console.log("New contact!");
		if (this.showForm == true){
			this.showForm = false;
		} else {
			this.showForm = true;
		}
	}

	public delContact(i){
		console.log("Delete contact!");
		this.contacts.splice(i, 1);
	}

	public showContact(i){
		console.log("Show contact!");
	}

	public addContact(){
		console.log("Add contact!");
		
		this.contacts.push(
			new Contact(this.contacts.length+1, 
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
        
		this.model = new Contact(1, '', '', '', '',new Address(0,'','','',''),
		new Phones('','','','',''), new Emails('',''),'','');
		this.showForm = true;
	}

	public updateContact(){
		console.log("Update contact!");
		this.showViewForm = true;
	}

}