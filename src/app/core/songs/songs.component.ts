import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/shared/interfaces/song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private songService: SongService) { }

  get songs() {
    return this.songService.songs;
  }

  ngOnInit() {
    this.songService.loadAll();
  }

  selectSongHandler(song: Song) {
    this.songService.selectedSong = song;
  }

}
