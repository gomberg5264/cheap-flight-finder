export default class FlightResult {
  dateFrom : string;
  dateTo : string;
  timeFrom : string;
  timeTo : string;
  currency: string;
  price : number;

  constructor(dateFrom = "", dateTo = "", timeFrom = "", timeTo = "", currency = "", price = 0) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.timeFrom = timeFrom;
    this.timeTo = timeTo;
    this.currency = currency;
    this.price = price;
  }
}
