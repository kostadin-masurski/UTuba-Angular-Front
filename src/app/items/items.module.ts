import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import { ItemsRoutingModule } from './items-routing.module';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongsComponent } from './songs/songs.component';



@NgModule({
  declarations: [PlaylistsComponent, SongsComponent, PlaylistCreateComponent, PlaylistEditComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  exports: [PlaylistsComponent, SongsComponent]
})
export class ItemsModule { }
