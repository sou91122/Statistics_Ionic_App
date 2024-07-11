import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosecountryPageRoutingModule } from './choosecountry-routing.module';

import { ChoosecountryPage } from './choosecountry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosecountryPageRoutingModule
  ],
  declarations: [ChoosecountryPage]
})
export class ChoosecountryPageModule {}
