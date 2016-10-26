import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "../service/search.service.ts";

import FlightResult from '../data/flight-result';

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
  flightResult : FlightResult = new FlightResult();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getFlight(this.fromIata, this.toIata, this.departDate, this.returnDate)
      .subscribe(
        flight  => this.flightResult = flight,
        error =>  this.errorMessage = <any>error);
  }

}
