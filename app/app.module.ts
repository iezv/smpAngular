import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router }        from '@angular/router';
import { OnInit }        from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { NavComponent }  from './nav.component';
import { ContactForm }   from './contactform.component';
import { ContactListComponent } from './contact-list.component';
import { ContactService } from './contact.service';
import { Contact }       from './contact';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  NavComponent,
                  ContactForm,
                  ContactListComponent
                                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
