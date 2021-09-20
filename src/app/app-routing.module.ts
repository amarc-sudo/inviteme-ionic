import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './pages/home/homepage/homepage.component';
import {ListCardComponent} from './component/events/list-card/list-card.component';
import {CardEventComponent} from './component/events/card-event/card-event.component';
import {IonicModule} from '@ionic/angular';
import {BrowserModule} from "@angular/platform-browser";
import {LoginFormComponent} from "./pages/home/login/login-form/login-form.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: ListCardComponent
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            component: LoginFormComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: '/homepage/schedule',
        pathMatch: 'full'
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    IonicModule,
    BrowserModule
  ],
  declarations: [
    ListCardComponent,
    CardEventComponent
  ],
  exports: [RouterModule, ListCardComponent, CardEventComponent]
})
export class AppRoutingModule {}
