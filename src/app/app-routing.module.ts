import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateVideoComponent } from './create-video/create-video.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'create-video', component: CreateVideoComponent },
    { path: 'home',  component: HomeComponent },
    { path: 'video/:menu', component: VideoComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}