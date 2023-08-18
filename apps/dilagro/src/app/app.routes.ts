import { Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';

export const appRoutes: Route[] = [
    {
        path: '', 
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
        // component: LoginComponent
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent)
    }
];
