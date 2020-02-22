import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/shared/interfaces/playlist';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private songService: SongService) { }

  get playlists() {
    return this.playlistService.playlists
  }

  ngOnInit() {
    this.playlistService.loadAll();
  }

  selectPlaylistHandler(playlist: Playlist) {
    this.playlistService.selectedPlaylist = playlist;
    this.songService.songs = this.playlistService.selectedPlaylist.songs;
  }

}
