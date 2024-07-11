import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicchoosePageRoutingModule } from './topicchoose-routing.module';

import { TopicchoosePage } from './topicchoose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicchoosePageRoutingModule
  ],
  declarations: [TopicchoosePage]
})
export class TopicchoosePageModule {}
