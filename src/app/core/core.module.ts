import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongsComponent } from './songs/songs.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsRoutingModule } from '../items/items-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavigationComponent, PlaylistsComponent, SongsComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule
  ],
  exports: [NavigationComponent, PlaylistsComponent, SongsComponent, FooterComponent]
})
export class CoreModule { }
