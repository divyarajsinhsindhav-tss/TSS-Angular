import { Routes } from "@angular/router";

export const USER_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./home/home').then(m => m.Home)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'application',
        loadComponent: () => 
            import('./application/application').then(m => m.Application)
    }
]