import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiamapPageRoutingModule } from './indiamap-routing.module';

import { IndiamapPage } from './indiamap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiamapPageRoutingModule
  ],
  declarations: [IndiamapPage]
})
export class IndiamapPageModule {}
