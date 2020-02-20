import { Component, OnInit, Input } from '@angular/core';
import { SongService } from '../services/song.service';

@Component({
    template: '<youtube-player videoId={{youtubeIdent}} height=550 width=900 suggestedQuality=hd1080></youtube-player>',
    selector: 'app-video',
})
export class VideoComponent implements OnInit {

    constructor(private songService: SongService) { }

    get youtubeIdent() {
        return this.songService.selectedSong.youtubeIdent;
    }

    ngOnInit() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}