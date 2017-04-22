import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { GridListComponent } from './grid-list/grid-list.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBo5aXDOGpZSsQBrDLLusoyBpEhVzohfD8",
  authDomain: "tech-flix.firebaseapp.com",
  databaseURL: "https://tech-flix.firebaseio.com",
  storageBucket: "tech-flix.appspot.com",
  messagingSenderId: "245237405131"
};

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavbarComponent,
    CardComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
