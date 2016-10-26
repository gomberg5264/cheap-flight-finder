import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.less']
})
export class SearchDetailsComponent implements OnInit {
  @Input() from : string = "";
  @Input() to : string = "";
  @Input() departDate : any;
  @Input() returnDate : any;

  constructor() { }

  ngOnInit() {
  }

}
