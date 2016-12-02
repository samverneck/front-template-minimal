import { TemplateFrontPage } from './app.po';

describe('template-front App', function() {
  let page: TemplateFrontPage;

  beforeEach(() => {
    page = new TemplateFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
