import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import { AuthGuard } from '../auth.guard';
import { RegisterComponent } from '../register/register.component';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'login',
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
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
