import { RouterModule, Routes } from "@angular/router";
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';

const routes: Routes = [
    {
      path: 'playlist',
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: '/playlist/create'
        },
        {
          path: 'create',
          component: PlaylistCreateComponent
        },
        {
          path: 'edit',
          component: PlaylistEditComponent
        }
      ]
    }
  ];

  export const ItemsRoutingModule = RouterModule.forChild(routes);