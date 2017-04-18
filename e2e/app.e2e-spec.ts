import { BalanceAppPage } from './app.po';

describe('balance-app App', () => {
  let page: BalanceAppPage;

  beforeEach(() => {
    page = new BalanceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
