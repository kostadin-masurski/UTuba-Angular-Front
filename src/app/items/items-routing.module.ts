import { RouterModule, Routes } from "@angular/router";
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
      path: 'playlist',
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: '/playlist/edit'
        },
        {
          path: 'create',
          component: PlaylistCreateComponent,
          canActivate: [AuthGuard],
          data: {
            isLogged: true
          }
        },
        {
          path: 'edit',
          component: PlaylistEditComponent,
          canActivate: [AuthGuard],
          data: {
            isLogged: true
          }
        }
      ]
    }
  ];

  export const ItemsRoutingModule = RouterModule.forChild(routes);