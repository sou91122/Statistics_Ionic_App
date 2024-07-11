import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryprofileaccordionPage } from './countryprofileaccordion.page';

const routes: Routes = [
  {
    path: '',
    component: CountryprofileaccordionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryprofileaccordionPageRoutingModule {}
