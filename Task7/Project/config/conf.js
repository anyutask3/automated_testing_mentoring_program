const GLOBAL_TIMEOUT = 40e3;

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/spec/spec.js'],
  capabilities: {
    browserName: 'chrome',
  },
  onPrepare() {
    global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
    global.ec = protractor.ExpectedConditions;

    const chai = require('chai');
    chai.use(require('chai-as-promised'));
    global.expect = chai.expect;

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  },
};
