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


module.exports = {
    beforeEach: browser => {
        yood = browser.page.objectPage()
        yood.navigate()
            .waitForElementPresent('@app', 5000)
            .waitForElementPresent('@beta', 5000)
            .click('@beta')
    },
    after: browser => {
        browser.end()
    },

    'filter': browser => {
        yood
            filterSite(yood, filters)

    },

}
        
        