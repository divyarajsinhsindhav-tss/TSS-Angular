import { Routes } from "@angular/router";

export const WEB_ROUTER: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page/page').then(m => m.Page)
  }
];