import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryrankingPageRoutingModule } from './countryranking-routing.module';

import { CountryrankingPage } from './countryranking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryrankingPageRoutingModule
  ],
  declarations: [CountryrankingPage]
})
export class CountryrankingPageModule {}
