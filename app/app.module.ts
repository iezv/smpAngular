import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Router }        from '@angular/router';
import { OnInit }        from '@angular/core';
import { HttpModule, Http }    from  '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ContactSeedData } from './shared/contact.data';

import { AppComponent }   from './app.component';
import { NavComponent }   from './components/navigation/nav.component';
import { ContactsComponent }   from './components/contacts/contacts.component';

import { ContactListComponent } from './components/contacts/contact-list/contact-list.component';
import { NewContactComponent } from './components/contacts/contact-form/newcontact.component';
import { ShowContactComponent } from './components/contacts/contact-form/showcontact.component';

import { ContactService } from './shared/contact.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, 
                  InMemoryWebApiModule.forRoot(ContactSeedData)],
  declarations: [ AppComponent,  NavComponent, ContactsComponent,
                  ContactListComponent, 
                  NewContactComponent,  
                  ShowContactComponent               
                  ],
  providers:   [ ContactService ], 
  bootstrap:   [ AppComponent, 
                                 ]
})


export class AppModule { }
