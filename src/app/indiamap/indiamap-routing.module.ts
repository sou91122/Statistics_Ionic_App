import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiamapPage } from './indiamap.page';

const routes: Routes = [
  {
    path: '',
    component: IndiamapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiamapPageRoutingModule {}
