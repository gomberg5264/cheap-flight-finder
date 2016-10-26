import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/homepage.component.ts';
import { SearchComponent } from './page/searchpage.component.ts';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'search/:from/:to/:fromIata/:toIata/:depart/:return', component: SearchComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class RyanairCheapFlightFinderRoutingModule { }
