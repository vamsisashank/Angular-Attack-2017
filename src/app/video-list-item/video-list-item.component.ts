import { Component, OnInit, Input } from '@angular/core';
import { AppStateService } from "./../shared/app-state.service";
import { Video } from "./../video/shared/video.model";

@Component({
  selector: 'video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {
  @Input() video: Video;

  constructor(private AppStateService: AppStateService) {}

  ngOnInit() {
  }

  onClick(){
    this.AppStateService.activeVideo = this.video;
  }
}
