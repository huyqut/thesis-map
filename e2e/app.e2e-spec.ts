import { ThesisMapPage } from './app.po';

describe('thesis-map App', () => {
  let page: ThesisMapPage;

  beforeEach(() => {
    page = new ThesisMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
