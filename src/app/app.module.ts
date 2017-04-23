import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NguiStickyModule }  from '@ngui/sticky';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateVideoComponent } from './create-video/create-video.component';
import { CardComponent } from './card/card.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { RouterModule }   from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { VideoplayboxComponent } from './videoplaybox/videoplaybox.component';


import { AppRoutingModule } from './app-routing.module';


import { GetvideosService } from './video-services/getvideos.service';
import { CreateVideoService } from './create-video/create-video.service';
import { AppStateService } from "./shared/app-state.service";
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideoListComponent } from './video-list/video-list.component';
import { YoutubeSafeUrlPipe } from './shared/youtube-safe-url.pipe';



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
    CreateVideoComponent,
    SideNavComponent,
    NavbarComponent,
    CardComponent,
    GridListComponent,
    HomeComponent,
    VideoComponent,
    VideoplayboxComponent,
    VideoListItemComponent,
    VideoListComponent,
    YoutubeSafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    NguiStickyModule
  ],
  providers: [
    CreateVideoService,
    GetvideosService,
    AppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
