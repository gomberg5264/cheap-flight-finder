import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './component/search-form.component.ts';
import { NavigationComponent } from './component/navigation.component.ts';
import { HomeComponent } from './page/homepage.component.ts';
import { SearchComponent } from './page/searchpage.component.ts';
import { RyanairCheapFlightFinderRoutingModule } from "./app-routing.module";
import { FlightResultComponent } from './component/flight-result.component.ts';
import { SearchDetailsComponent } from './component/search-details.component.ts';
import Round from "./filter/round";

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavigationComponent,
    HomeComponent,
    SearchComponent,
    FlightResultComponent,
    SearchDetailsComponent,
    Round
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RyanairCheapFlightFinderRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
