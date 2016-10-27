import FlightError from "./flight-error";

export default class FlightResult {
  error : FlightError;
  dateFrom : string;
  dateTo : string;
  timeFrom : string;
  timeTo : string;
  currency: string;
  price : number;

  constructor(error = null, dateFrom = "", dateTo = "", timeFrom = "", timeTo = "", currency = "", price = 0) {
    this.error = error;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.timeFrom = timeFrom;
    this.timeTo = timeTo;
    this.currency = currency;
    this.price = price;
  }
}
