import { Component, OnInit } from '@angular/core';
import { CreateVideoService } from './create-video.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './create-video.component.html',
    styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {

    constructor(
        private createVideoService:CreateVideoService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    createVideo(data)
    {
        this.createVideoService.postVideos(data);
        this.router.navigate(['/home']);
    }
}
