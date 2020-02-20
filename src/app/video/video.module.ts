import { NgModule } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { VideoComponent } from './video.component';



@NgModule({
  declarations: [VideoComponent],
  imports: [
    YouTubePlayerModule
  ],
  exports: [VideoComponent]
})
export class VideoModule { }
