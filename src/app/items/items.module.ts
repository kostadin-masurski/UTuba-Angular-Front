import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import { ItemsRoutingModule } from './items-routing.module';



@NgModule({
  declarations: [PlaylistCreateComponent, PlaylistEditComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
