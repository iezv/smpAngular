import { Component } from '@angular/core';
import { OnInit }   from '@angular/core';
import { Contact } from './contact';
import { ContactListComponent } from './contact-list.component';


export class ContactService {

  private contacts: Contact[] = [
    new Contact('Vasya','Google','HR','055-555-55-55','email@gmail.com'),
    new Contact('Petya','Yandex','CEO','055-444-44-44','petya@gmail.com'),
    new Contact('Motya','HP','Maneger','055-777-77-77','motya@gmail.com'),
    new Contact('Isya','Amdos','HR','005-553-33-99','izya@gmail.com'),
    new Contact('Pasha','Hevra','Minagel','058-321-12-34','pasha@gmail.com'),
    ];
  
  constructor(){
    }  

  public getContacts(){
    return this.contacts;
  }

  public addContact(contact: Contact){
    this.contacts.push(contact);
  }
 
}



	