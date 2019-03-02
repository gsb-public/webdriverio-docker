describe('webdriver.io page', function() {
  it('should have the right title', function () {

    browser.url('https://gsb.stanford.edu');

    const title = browser.getTitle();
    console.log('Title was: ' + title);

    browser.saveDocumentScreenshot('/out/home-page.png');
    //browser.saveScreenshot('/out/home-page.png', true);

    console.log('After screenshot');

  });
});


