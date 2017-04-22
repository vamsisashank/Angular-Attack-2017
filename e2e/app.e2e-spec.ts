import { TechgagPage } from './app.po';

describe('techgag App', () => {
  let page: TechgagPage;

  beforeEach(() => {
    page = new TechgagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
