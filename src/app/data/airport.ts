import Country from './country';

export default class Airport {
  iataCode : string;
  name : string;
  base : boolean;
  latitude : number;
  longitude : number;
  country : Country;

  constructor(iataCode = "", name = "", base = false, latitude = 0, longitude = 0, country = new Country()) {
    this.iataCode = iataCode;
    this.name = name;
    this.base = base;
    this.latitude = latitude;
    this.longitude = longitude;
    this.country = country;
  }

  getIataCode() : string {
    return this.iataCode;
  }

  getName() : string {
    return this.name;
  }

  toString() {
    return this.name + " [" + this.iataCode + "]";
  }
}
