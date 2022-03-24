import { Routes } from '@angular/router';
// Import the authentication guard
import { AuthGuard } from '@auth0/auth0-angular';

import { DesktopComponent } from './layouts/desktop/desktop.component';

export const Approutes: Routes = [
  {
    path: '',
    component: DesktopComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/sign-in'
  }
];
