import { Injectable } from '@angular/core';
import { Song } from '../shared/interfaces/song';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../shared/interfaces/playlist';
import { PlaylistService } from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  songs: Song[];
  selectedSong: Song;

  constructor(private http: HttpClient, private plalistService: PlaylistService) { }

  loadAll() {
    this.http.get<Song[]>('http://localhost:8080/api/song')
    .subscribe(songs => { this.songs = songs; })
  }

  add(song: {}) {
    song["youtubeIdent"] = song["youtubeIdent"].slice(song["youtubeIdent"].indexOf('=') + 1);
    this.http.post<any>('http://localhost:8080/api/song/add', song)
    .subscribe(res => {
      this.selectAddedSong(song["youtubeIdent"]);
    },
    err => {
      this.selectAddedSong(song["youtubeIdent"]);
    }
    );
  }

  selectAddedSong(youtubeIdent: string) {
    this.http.get<Song>('http://localhost:8080/api/song/' + youtubeIdent)
    .subscribe(song => {
      this.selectedSong = song;
      let playlist: Playlist = this.plalistService.selectedPlaylist;
      playlist.songs.push(song);
      this.plalistService.edit(playlist);
    })
  }
}
