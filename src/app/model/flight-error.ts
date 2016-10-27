export default class FlightError {
  type : FlightErrorType;
  messageLine1 : string;
  messageLine2 : string;

  constructor(type = FlightErrorType.WARNING, messageLine1 = "", messageLine2 = "") {
    this.type = type;
    this.messageLine1 = messageLine1;
    this.messageLine2 = messageLine2;
  }
}

export enum FlightErrorType {
  WARNING,
  ERROR
};
