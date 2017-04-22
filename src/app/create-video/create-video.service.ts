import { Injectable } from '@angular/core';

import { VIDEOS } from './vidoes-list';

@Injectable()
export class CreateVideoService {
    getVideos(): any {
        return VIDEOS;
    }
}