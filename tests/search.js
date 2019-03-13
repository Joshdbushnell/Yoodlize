var yood = {}



var searchSite = (fillout, searchBar,) => {
    fillout
        .waitForElementVisible('@app')
        .waitForElementVisible('@searchBar')
        .click('@searchBar')
        .clearValue('@searchBar')
        .setValue('@searchBar', searchBar)
        .waitForElementVisible('@searchButton')
        .click('@searchButton')
        .expect.element('@keyword').to.have.text.which.contains(searchBar)

        
    

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

    'search': browser => {
        yood
            searchSite(yood, 'refrigerator',)
            searchSite(yood, 'dog',)
            searchSite(yood, 'sauce',)
       
    },

}
        
        