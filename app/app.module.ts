import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Router }        from '@angular/router';
import { OnInit }        from '@angular/core';
import { AppComponent }   from './app.component';
import { NavComponent }   from './nav.component';
import { ContactsComponent }   from './contacts.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  NavComponent,
                  ContactsComponent,
              
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
