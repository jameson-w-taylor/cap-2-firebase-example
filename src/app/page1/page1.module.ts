import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Page1Page } from './page1.page';

import { Page1RoutingModule } from './page1-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1RoutingModule
  ],
  declarations: [Page1Page]
})
export class Page1Module {}
