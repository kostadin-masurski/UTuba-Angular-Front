import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent {

  constructor(private playlistService: PlaylistService, private songService: SongService) { }

  get selectedPlaylist() {
    return this.playlistService.selectedPlaylist;
  }

  editPlaylist(name: string, imgUrl: string) {
    this.selectedPlaylist.name = name;
    this.selectedPlaylist.imgUrl = imgUrl;
    this.playlistService.edit(this.selectedPlaylist);
  }

  addSong(name: string, artist: string, songUrl: string, imgUrl: string){
    this.songService.add({name, artist, songUrl, imgUrl});
  }

}
