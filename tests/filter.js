var yood = {}




let filters = [
    '@clothing',
    '@goods',
    '@partyfil',
    '@exp',
    

]

let filterSite = (placeholder, thingsToClick) => {
    thingsToClick.forEach(thingToClick => {
        placeholder
            .waitForElementVisible('@app')
            .click('@app')
            .waitForElementVisible('@advanced')
            .click('@advanced')
            .waitForElementPresent(thingToClick)
            .click(thingToClick)
            .click('@searchButton')
            .expect.element('@keyword').text.to.contain('category').before(5000)
    })
}

var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

module.exports = {
    before: browser => {
        yood = browser.page.objectPage()
        yood.navigate()


            .waitForElementPresent('@app', 5000)
    },
    after: browser => {
        browser.end()
    },

    'filter': browser => {
        yood
            filterSite(yood, filters)

    },

}
        
        