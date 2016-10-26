import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Injectable } from '@angular/core';

import FlightResult from '../data/flight-result';

@Injectable()
export class SearchService {

  constructor(private http: Http) {  }

  getFlight(fromIata, toIata, departDate, returnDate) : Observable<FlightResult> {
    return this.http.get(`https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${fromIata}/to/${toIata}/${departDate}/${returnDate}/250/unique/?limit=15&offset-0`)
      .map(this.extractCheapFlight)
      .catch(this.handleError);
  }

  private extractCheapFlight(res: Response) {
    let body = res.json();
    let flightResult : FlightResult = null;
    if (body) {
      let flight = body.flights.sort((f1, f2) => f1.price > f2.price)[0];
      let [dateFrom, timeFrom] = flight.dateFrom.split("T");
      let [dateTo, timeTo] = flight.dateTo.split("T");
      flightResult = new FlightResult(dateFrom, dateTo, timeFrom.replace(/Z/g, ""), timeTo.replace(/Z/g, ""), flight.currency, flight.price);
    }
    return flightResult || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
