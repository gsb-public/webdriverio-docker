describe('webdriver.io page', function() {
  it('should have the right title', function () {

    browser.url('https://www.google.com');

    const title = browser.getTitle();
    console.log('Title was: ' + title);

    //browser.saveDocumentScreenshot('home-page.png');
    browser.saveScreenshot('/out/home-page.png', true);

    console.log('After screenshot');

  });
});


