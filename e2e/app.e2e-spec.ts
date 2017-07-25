import { DoorControlPage } from './app.po';

describe('door-control App', () => {
  let page: DoorControlPage;

  beforeEach(() => {
    page = new DoorControlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
