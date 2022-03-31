import { Routes } from '@angular/router';
// Import the authentication guard
import { AuthGuard } from '@auth0/auth0-angular';

import { DesktopLayoutComponent } from './layouts/desktop/desktop-layout.component';
import { ProfileComponent } from './modules/profile/profile.component';

export const Approutes: Routes = [
  {
    path: '',
    component: DesktopLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/sign-in'
  }
];
