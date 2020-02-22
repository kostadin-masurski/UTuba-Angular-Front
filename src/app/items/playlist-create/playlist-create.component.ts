import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent {

  constructor(private playlistService: PlaylistService, private router: Router) { }

  createPlaylist(name: string, imgUrl: string) {
    this.playlistService.create({name: name, imgUrl: imgUrl});
    this.router.navigateByUrl('/home');
  }

}
