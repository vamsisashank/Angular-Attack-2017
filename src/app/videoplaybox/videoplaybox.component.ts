import { Component, OnInit } from '@angular/core';
import { AppStateService } from "./../shared/app-state.service";


@Component({
  selector: 'videoplaybox',
  templateUrl: './videoplaybox.component.html',
  styleUrls: ['./videoplaybox.component.css']
})
export class VideoplayboxComponent implements OnInit {

  constructor( private AppStateService: AppStateService) {

  }

  ngOnInit() {
  }

}
