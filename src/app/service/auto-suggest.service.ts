import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import Country from '../model/country';
import Airport from '../model/airport';

@Injectable()
export class AutoSuggestService {
  errorMessage: string;
  airportsUrl = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';
  fromList : Airport[];
  data: any;

  constructor(private http: Http) {
    this.http.get(this.airportsUrl)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(
        data => {this.data = data, this.assembleFromList()},
        error => {throw new Error(error)});
  }

  getFromAirports (filterText : string): Airport[] {
    return this.fromList ? this.fromList.filter(airport => airport.getName().toLowerCase().startsWith(filterText) || airport.getIataCode().toLowerCase().startsWith(filterText)) : [];
  }

  getToAirports (fromAirport : Airport, filterText : string): Airport[] {
    let toList : Airport[] = [];
    if (this.data && fromAirport) {
      for (let i = 0, toRoutes = this.data.routes[fromAirport.getIataCode()]; i < toRoutes.length; i++) {
        let toAirport = this.data.airports.find(airport => toRoutes[i] == airport.iataCode);
        if (toAirport.name.toLowerCase().startsWith(filterText) || toAirport.iataCode.toLowerCase().startsWith(filterText)) {
          let country = toAirport.country;
          toList.push(
            new Airport(toRoutes[i], toAirport.name, toAirport.base, toAirport.latitude, toAirport.longitude,
              new Country(country.code, country.name, country.seoName, country.englishSeoName, country.currency, country.url))
          );
        }
      }
    }
    return toList;
  }

  getAirportForIataCode(iataCode) : Airport {
    return this.data ? this.data.airports.find(airport => iataCode == airport.iataCode) : null;
  }

  getErrorMessage (): string {
    return this.errorMessage;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private assembleFromList() {
    this.fromList = [];
    for (let iata in this.data.routes) {
      let airport = this.data.airports.find(airport => iata == airport.iataCode);
      if (airport) {
        let country = airport.country;
        this.fromList.push(
          new Airport(iata, airport.name, airport.base, airport.latitude, airport.longitude,
          new Country(country.code, country.name, country.seoName, country.englishSeoName, country.currency, country.url))
        )
      }
    }
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
