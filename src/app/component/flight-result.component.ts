import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "../service/search.service.ts";

import FlightResult from '../model/flight-result';
import FlightError from "../model/flight-error";
import { FlightErrorType } from "../model/flight-error";

@Component({
  selector: 'flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.less'],
  providers: [ SearchService ]
})
export class FlightResultComponent implements OnInit {
  @Input() from : string = "";
  @Input() to : string = "";
  @Input() fromIata : string = "";
  @Input() toIata : string = "";
  @Input() departDate : any;
  @Input() returnDate : any;
  errorMessage : string;
  flightResult : FlightResult = null;
  warningType : FlightErrorType;

  constructor(private searchService: SearchService) {
    this.warningType = FlightErrorType.WARNING;
  }

  ngOnInit() {
    this.searchService.getFlight(this.fromIata, this.toIata, this.departDate, this.returnDate)
      .subscribe(
        flight  => this.flightResult = flight,
        error =>  this.errorMessage = <any>error);
  }

}
