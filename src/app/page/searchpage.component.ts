import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.less']
})
export class SearchComponent implements OnInit {
  from: string;
  to: string;
  fromIata: string;
  toIata: string;
  departDateStr : string;
  returnDateStr : string;
  departDate : NgbDateStruct;
  returnDate : NgbDateStruct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.from = decodeURIComponent(params["from"]);
      this.to = decodeURIComponent(params["to"]);
      this.fromIata = params["fromIata"];
      this.toIata = params["toIata"];
      this.departDate = this.getDateFromString(params["depart"]);
      this.returnDate = this.getDateFromString(params["return"]);
      this.departDateStr = params["depart"];
      this.returnDateStr = params["return"];
    });
  }

  private getDateFromString(dateString) {
    let date = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    return date && date[3] ? {year: date[1], month: date[2], day: date[3]} : null;
  }
}
