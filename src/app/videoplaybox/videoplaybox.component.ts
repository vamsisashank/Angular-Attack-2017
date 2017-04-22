import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


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
  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  }

  ngOnInit() {

  }

}
