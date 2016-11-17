import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavComponent }  from './nav.component';
import { ContactsComponent } from './contacts.component';
import { ContactForm } from './contactform.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  NavComponent,
                  ContactsComponent,
                  ContactForm,
                                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
