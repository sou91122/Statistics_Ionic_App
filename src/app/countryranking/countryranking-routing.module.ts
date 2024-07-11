import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryrankingPage } from './countryranking.page';

const routes: Routes = [
  {
    path: '',
    component: CountryrankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryrankingPageRoutingModule {}
