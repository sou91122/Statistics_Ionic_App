import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeseriesPage } from './timeseries.page';

const routes: Routes = [
  {
    path: '',
    component: TimeseriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeseriesPageRoutingModule {}
