import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './page/homepage.component.ts';
import { SearchPageComponent } from './page/searchpage.component.ts';
import { ContactPageComponent } from "./page/contactpage.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'search/:from/:to/:fromIata/:toIata/:depart/:return', component: SearchPageComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class RyanairCheapFlightFinderRoutingModule { }
