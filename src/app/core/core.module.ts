import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongsComponent } from './songs/songs.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavigationComponent, PlaylistsComponent, SongsComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, PlaylistsComponent, SongsComponent, FooterComponent]
})
export class CoreModule { }
