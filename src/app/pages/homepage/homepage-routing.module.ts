import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagePage } from './homepage.page';
import {ListCardComponent} from "../../component/events/list-card/list-card.component";

const routes: Routes = [
  {
    path: 'homepageTabs',
    component: HomepagePage,
    children: [
      {
        path: '',
        redirectTo: '/homepage/homepageTabs/tab1',
        pathMatch: 'full'
      }
    ]
  }, {
    path: '',
    redirectTo: '/homepage/homepageTabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
