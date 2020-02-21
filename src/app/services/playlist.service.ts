import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Playlist} from '../shared/interfaces/playlist'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlists: Playlist[];
  selectedPlaylist: Playlist;

  constructor(private http: HttpClient) { }

  loadAll() {
    return this.http.get<Playlist[]>('http://localhost:8080/api/playlists')
    .subscribe(playlists => {
      this.playlists = playlists;
    })
  }

  create(playlist: {}) {
    this.http.post('http://localhost:8080/api/playlist/create', playlist)
    .subscribe()
  }

  edit(playlist: Playlist) {
    this.http.put('http://localhost:8080/api/playlist/edit', playlist)
    .subscribe(
      res => this.loadAll(),
      err => this.loadAll()
    )
  }
}
