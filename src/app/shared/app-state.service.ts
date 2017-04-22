import { Injectable } from '@angular/core';

@Injectable()
export class AppStateService {

  videoList: Video[] = [];
  activeVideo: Video;

  constructor() { }

}
