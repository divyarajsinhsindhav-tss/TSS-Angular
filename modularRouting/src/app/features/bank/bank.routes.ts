import { Routes } from "@angular/router";

export const BANK_ROUTES: Routes = [
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin').then(m => m.Admin)
  }
];