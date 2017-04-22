import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CreateVideoService } from './../create-video/create-video.service'

declare var moment: any;

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(private createVideoService: CreateVideoService, af: AngularFire) {
    var video = createVideoService.getVideos();
    console.log(video);
    console.log(createVideoService.getVideos());



    //Adding videos in list

    // var video = {
    //   dateAdded: moment().format(),
    //   url: 'testUrl',
    //   title: 'Funny',
    //   description: 'funny video',
    //   primaryTag: 'primaryTag',
    //   secondaryTag: 'secondaryTag',
    //   likes: 0,
    //   dislikes: 0,
    //   comments: [{
    //     videoID: 'testUrl'
    //   }]
    // };
    //
    // this.items = af.database.list('/videos');
    // this.items.push(video);
  }

  ngOnInit() {
  }

}
