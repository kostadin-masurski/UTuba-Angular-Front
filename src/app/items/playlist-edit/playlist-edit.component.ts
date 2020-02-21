import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/shared/interfaces/song';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit{
  ngOnInit(): void {
    this.playlistService.loadAll();
    this.songService.loadAll();
  }

  constructor(private playlistService: PlaylistService, private songService: SongService) { }

  get selectedPlaylist() {
    return this.playlistService.selectedPlaylist;
  }

  get selectedSong() {
    return this.songService.selectedSong;
  }

  editPlaylist(name: string, imgUrl: string) {
    this.selectedPlaylist.name = name;
    this.selectedPlaylist.imgUrl = imgUrl;
    this.playlistService.edit(this.selectedPlaylist);
  }

  addSong(name: string, artist: string, youtubeIdent: string, imgUrl: string){
    let newSong: Song = {name, artist, youtubeIdent, imgUrl};
    this.selectedPlaylist.songs.push(newSong);
    this.songService.add(newSong);
  }

}
