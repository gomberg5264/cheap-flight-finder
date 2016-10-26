/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutoSuggestService } from './auto-suggest.service.ts';

describe('Service: AutoSuggest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoSuggestService]
    });
  });

  it('should ...', inject([AutoSuggestService], (service: AutoSuggestService) => {
    expect(service).toBeTruthy();
  }));
});
