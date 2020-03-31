import { RouterModule, Routes } from "@angular/router";
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
      path: 'home',
      children: [
        {
          path: '',
          component: HomeComponent,
          canActivate: [AuthGuard],
          data: {
            isLogged: true
          }
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