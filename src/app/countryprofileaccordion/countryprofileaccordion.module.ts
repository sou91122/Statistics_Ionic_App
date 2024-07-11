import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryprofileaccordionPageRoutingModule } from './countryprofileaccordion-routing.module';

import { CountryprofileaccordionPage } from './countryprofileaccordion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryprofileaccordionPageRoutingModule
  ],
  declarations: [CountryprofileaccordionPage]
})
export class CountryprofileaccordionPageModule {}
