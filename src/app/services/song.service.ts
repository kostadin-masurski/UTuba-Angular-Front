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
  allSongs: Song[];
  selectedSong: Song;

  constructor(private http: HttpClient, private playlistService: PlaylistService) { }

  loadAll() {
    this.http.get<Song[]>('http://localhost:8080/api/songs')
    .subscribe(songs => {
      this.songs = songs;
      this.allSongs = songs;
    })
  }

  add(song: {}) {
    song["youtubeIdent"] = song["youtubeIdent"].slice(song["youtubeIdent"].indexOf('=') + 1);
    this.http.post<any>('http://localhost:8080/api/songs/add', song)
    .subscribe(res => {
      this.selectAddedSong(song["youtubeIdent"]);
    },
    err => {
      this.selectAddedSong(song["youtubeIdent"]);
    }
    );
  }

  selectAddedSong(youtubeIdent: string) {
    this.http.get<Song>('http://localhost:8080/api/songs/' + youtubeIdent)
    .subscribe(song => {
      this.selectedSong = song;
      let playlist: Playlist = this.playlistService.selectedPlaylist;
      // playlist.songs.push(song);
      this.playlistService.edit(playlist);
    })
  }
}
