import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicchoosePage } from './topicchoose.page';

const routes: Routes = [
  {
    path: '',
    component: TopicchoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicchoosePageRoutingModule {}
