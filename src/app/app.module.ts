import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './component/search-form.component.ts';
import { NavigationComponent } from './component/navigation.component.ts';
import { HomePageComponent } from './page/homepage.component.ts';
import { SearchPageComponent } from './page/searchpage.component.ts';
import { RyanairCheapFlightFinderRoutingModule } from "./app-routing.module";
import { FlightResultComponent } from './component/flight-result.component.ts';
import { SearchDetailsComponent } from './component/search-details.component.ts';
import Round from "./filter/round";
import Time from "./filter/time";
import { ContactPageComponent } from './page/contactpage.component.ts';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavigationComponent,
    HomePageComponent,
    SearchPageComponent,
    FlightResultComponent,
    SearchDetailsComponent,
    Round,
    Time,
    ContactPageComponent
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
