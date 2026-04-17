import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page } from './page/page';
import { WEB_ROUTER } from './web.routes';

@NgModule({
  declarations: [
    Page
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WebModule { }
