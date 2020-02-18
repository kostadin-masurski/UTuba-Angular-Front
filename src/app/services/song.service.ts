import { Injectable } from '@angular/core';
import { Song } from '../shared/interfaces/song';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  songs: Song[];
  selectedSong: Song;

  constructor(private http: HttpClient) { }

  loadAll() {
    this.http.get<Song[]>('http://localhost:8080/api/song')
    .subscribe(songs => {
      this.songs = songs;
    })
  }

  add(song: {}) {
    let addedSongUrl: string = song["songUrl"];
    this.http.post('http://localhost:8080/api/song/add', song)
    .subscribe(res => console.log(res));
  }

  edit(song: Song) {
    this.http.put('http://localhost:8080/api/song/edit', song)
    .subscribe();
  }
}
