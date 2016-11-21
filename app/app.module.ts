import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NavComponent }   from './nav.component';
import { ContactListComponent }   from './contact-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  NavComponent,
                  ContactListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
