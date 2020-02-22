import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private songService:SongService) { }

  get selectedPlaylist() {
    return this.playlistService.selectedPlaylist;
  }

  get slectedSong() {
    return this.songService.selectedSong;
  }

  ngOnInit(): void {
  }

}
