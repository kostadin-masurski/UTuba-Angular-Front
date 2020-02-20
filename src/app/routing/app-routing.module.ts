import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'register',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
export const AppRoutingModule = RouterModule.forRoot(routes);
