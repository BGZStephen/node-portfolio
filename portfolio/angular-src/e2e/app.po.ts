import { browser, element, by } from 'protractor';

export class AngularSrcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('portfolio-root h1')).getText();
  }
}
