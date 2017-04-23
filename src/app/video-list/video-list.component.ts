import { Component, OnInit } from '@angular/core';
import { GetvideosService } from './../video-services/getvideos.service';
import { AppStateService } from "./../shared/app-state.service";
import { Video } from "./../video/shared/video.model";
import * as moment from "moment";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(
      private getvideosService: GetvideosService,
      private appStateService:AppStateService
  ) { }

  ngOnInit() {
    this.getvideosService.fetchVideos('angular')
        .subscribe(data => {
          this.appStateService.videoList = data.items.map(item => {
            return new Video(
                item.id.videoId,
                item.snippet.title,
                item.snippet.thumbnails.default.url,
                item.snippet.channelTitle,
                item.snippet.channelId,
                moment(item.snippet.publishedAt).fromNow(),
                item.snippet.description)
          });
          this.appStateService.activeVideo = this.appStateService.videoList[0];
        });
  }

}
