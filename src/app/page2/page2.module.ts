import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Page2Page } from './page2.page';

import { Page2RoutingModule } from './page2-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page2RoutingModule
  ],
  declarations: [Page2Page]
})
export class Page2Module {}
