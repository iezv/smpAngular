import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'contacts',
  templateUrl: 'app/template/contacts.component.html',
  styleUrls: ['style/partials/contacts.component.css']
})

export class ContactsComponent {
  static contacts: Contact[];
  
  constructor(){
  	this.contacts = [
    new Contact(1, 'Vasya','Google','HR','055-555-55-55','email@gmail.com'),
    new Contact(2, 'Petya','Yandex','CEO','055-444-44-44','petya@gmail.com'),
    new Contact(3, 'Motya','HP','Maneger','055-777-77-77','motya@gmail.com'),
    new Contact(4, 'Isya','Amdos','HR','005-553-33-99','izya@gmail.com'),
    new Contact(5, 'Pasha','Hevra','Minagel','058-321-12-34','pasha@gmail.com'),
  	]
  }  

  public getContacts(){
    return this.contacts;
  }
}

  

