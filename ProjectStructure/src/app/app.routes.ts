import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./layout/layout').then(m => m.Layout),
        children: [
            {
                path: 'admin',
                loadChildren: () => 
                    import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
            },
            {
                path: 'user',
                loadChildren: () => 
                    import('./features/user/user.routes').then(m => m.USER_ROUTES)
            }
        ]
    }
];
