import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventSearchPageRoutingModule } from './event-search-routing.module';

import { EventSearchPage } from './event-search.page';
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventSearchPageRoutingModule,
    AppRoutingModule
  ],
  declarations: [EventSearchPage]
})
export class EventSearchPageModule {}
