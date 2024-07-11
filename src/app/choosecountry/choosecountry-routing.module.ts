import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosecountryPage } from './choosecountry.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosecountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosecountryPageRoutingModule {}
