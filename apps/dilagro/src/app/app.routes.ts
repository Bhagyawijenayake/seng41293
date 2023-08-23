import { Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';

import { importProvidersFrom } from '@angular/core';
import { provideAuth, getAuth } from '@angular/fire/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    providers: [importProvidersFrom(provideAuth(()=>getAuth()))],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((m) => m.AdminComponent),
  },
];
