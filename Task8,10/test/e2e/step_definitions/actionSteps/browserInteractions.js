"use strict";
let {Then, When, Given} = require('cucumber');
const highlightElement = require('../utils/stepFunctions.js').highlightElement;
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const logger = require('../../config/loggerConfig.js').logger;

When(/^I wait "([^"]*)" seconds$/, (waitTime) => {
    logger.info(`I wait ${waitTime} seconds`);
    return browser.sleep(waitTime * 1000);
});

When(/^I open "([^"]*)" url$/, (url) => {
    logger.info(`I open ${url} url`);
    return browser.get(url);
});

When(/^I highlight "([^"]*)"$/, (alias) => {
    logger.info(`I highlight ${alias}`);
    return highlightElement(alias);
});

When(/^I input "([^"]*)" searched text "([^"]*)"$/, (alias, text) => {
    let element = elementHelper(alias);   
    return element.sendKeys(text);
});