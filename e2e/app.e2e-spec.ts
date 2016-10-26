import { RyanairCheapFlightFinderPage } from './app.po';

describe('ryanair-cheap-flight-finder App', function() {
  let page: RyanairCheapFlightFinderPage;

  beforeEach(() => {
    page = new RyanairCheapFlightFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
