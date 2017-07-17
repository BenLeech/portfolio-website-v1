import { PortfolioWebsitePage } from './app.po';

describe('portfolio-website App', () => {
  let page: PortfolioWebsitePage;

  beforeEach(() => {
    page = new PortfolioWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
