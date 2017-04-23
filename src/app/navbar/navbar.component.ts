import { Component, OnInit } from '@angular/core';

import { GetvideosService } from './../video-services/getvideos.service';
import { AppStateService } from "./../shared/app-state.service";
import { Video } from "./../video/shared/video.model";
import * as moment from "moment";


const MENULIST= [
  'Angular 2', 'AngularJs', 'ReactJs', 'Vue.js','Polymer',
  'Kafka', 'Java', 'Python',
  'Scala', 'TypeScript', 'JavaScript', 'Docker','ElasticSearch','IoT'];


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menulist= MENULIST;

  constructor( private getvideosService: GetvideosService,
               private appStateService:AppStateService) { }

  ngOnInit() {
    this.getvideosService.fetchVideos('angular')
        .subscribe(data => {
          this.appStateService.videoList = data.items.map(item => {
            return new Video(
                item.id.videoId,
                item.snippet.title,
                item.snippet.thumbnails.high.url,
                item.snippet.channelTitle,
                item.snippet.channelId,
                moment(item.snippet.publishedAt).fromNow(),
                item.snippet.description)
          });
          this.appStateService.activeVideo = this.appStateService.videoList[0];
        });
  }


    fetchMenu(menu){
        this.getvideosService.fetchVideos(menu)
            .subscribe(data => {
                this.appStateService.videoList = data.items.map(item => {
                    return new Video(
                        item.id.videoId,
                        item.snippet.title,
                        item.snippet.thumbnails.high.url,
                        item.snippet.channelTitle,
                        item.snippet.channelId,
                        moment(item.snippet.publishedAt).fromNow(),
                        item.snippet.description)
                });
                this.appStateService.activeVideo = this.appStateService.videoList[0];
            });
    }

}
