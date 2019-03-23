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

    'search': browser => {
        yood
            searchSite(yood, 'refrigerator',)
            searchSite(yood, 'dog',)
            searchSite(yood, 'sauce',)
       
    },

}
        
        