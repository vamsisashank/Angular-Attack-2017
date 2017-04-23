import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { AppStateService } from "./../shared/app-state.service";
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'videoplaybox',
  templateUrl: './videoplaybox.component.html',
  styleUrls: ['./videoplaybox.component.css']
})
export class VideoplayboxComponent implements OnInit {

  name:string;
  videoUrl: SafeResourceUrl;
  video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer, private appStateService: AppStateService) {
  }

  ngOnInit() {
    var last = '?autoplay=1';
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id + last);
  }

}
