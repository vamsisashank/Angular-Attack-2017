import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class GetvideosService {

    constructor(private http:Http) {
    }

    fetchVideos(query:string) {
        return this.http
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}` +
            '&maxResults=50' +
            '&type=video' +
            '&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM')
            .map(response => response.json())
    }

}
