import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Router }        from '@angular/router';
import { OnInit }        from '@angular/core';
import { HttpModule }    from  '@angular/http';

import { AppComponent }   from './app.component';
import { NavComponent }   from './nav.component';
import { ContactsComponent }   from './contacts.component';
import { ContactListComponent } from './contacts/contact-list.component';
import { NewContactComponent } from './contacts/newcontact.component';
import { ShowContactComponent } from './contacts/showcontact.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,
                  NavComponent,
                  ContactsComponent,
                  ContactListComponent, 
                  NewContactComponent,  
                  ShowContactComponent               
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
