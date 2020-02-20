import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private songService:SongService) { }

  get selectedPlaylist() {
    return this.playlistService.selectedPlaylist;
  }

  get slectedSong() {
    return this.songService.selectedSong;
  }

  get color() {
    if (this.selectedPlaylist.rate <= 3.33) {
      return 'red';
    }
    if (this.selectedPlaylist.rate <= 6.66) {
      return 'orange';
    }
    if (this.selectedPlaylist.rate > 6.66) {
      return 'green';
    }
  }

  rate(rating: number) {
    console.log(rating);
  }

  ngOnInit(): void {
  }

}
