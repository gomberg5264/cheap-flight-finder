import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable.d';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import Airport from '../model/airport';
import { AutoSuggestService } from "../service/auto-suggest.service.ts";


@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less'],
  providers: [ AutoSuggestService ]
})
export class SearchFormComponent implements OnInit {
  errorMessage : string;
  from : string = "";
  to : string = "";
  departDate : any;
  returnDate : any;
  fromAirport : Airport = null;
  toAirport : Airport = null;
  today: NgbDateStruct;

  constructor(private autoSuggestService: AutoSuggestService) {
    const now = new Date();
    this.today = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  @ViewChild('toVal') toValVC;
  @ViewChild('depart') departVC;

  ngOnInit() {
  }

  searchFrom = (text$ : Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.autoSuggestService.getFromAirports(term).filter(this.filterAirport.bind(this, term)).splice(0, 10));

  searchTo = (text$ : Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.autoSuggestService.getToAirports(this.fromAirport, term).filter(this.filterAirport.bind(this, term)).splice(0, 10));


  selectFromAirport($selectItem) {
    this.fromAirport = $selectItem.item;
    setTimeout(() => this.toValVC.nativeElement.focus(), 10);
  }

  selectToAirport($selectItem) {
    this.toAirport = $selectItem.item;
    this.departVC.nativeElement.focus();
  }

  getLink() {
    let link = "/search";
    if (this.fromAirport && this.toAirport && this.departDate && this.returnDate) {
      link += "/" + [encodeURIComponent(this.fromAirport.toString()),
        encodeURIComponent(this.toAirport.toString()),
        this.fromAirport.getIataCode(),
        this.toAirport.getIataCode(),
        this.departDate.year + "-" + String(this.departDate.month).replace(/^(.)$/, "0$1") + "-" + String(this.departDate.day).replace(/^(.)$/, "0$1"),
        this.returnDate.year + "-" + String(this.returnDate.month).replace(/^(.)$/, "0$1") + "-" + String(this.returnDate.day).replace(/^(.)$/, "0$1")
      ].join("/");
    }
    return link;
  }

  private filterAirport(term : string, airport : Airport) {
    let re = new RegExp(term, 'gi');
    return re.test(airport.getName()) || re.test(airport.getIataCode());
  }
}
