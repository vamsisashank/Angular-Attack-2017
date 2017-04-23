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

  }

}
