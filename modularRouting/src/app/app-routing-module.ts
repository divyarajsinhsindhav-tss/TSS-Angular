import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('./features/web/web.routes').then(m => m.WEB_ROUTER)
  },
  {
    path: 'bank',
    loadChildren: () => 
      import('./features/bank/bank.routes').then(m => m.BANK_ROUTES)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
