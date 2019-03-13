var yood = {}



var searchSite = (fillout, searchBar) => {
    fillout
        .waitForElementVisible('@app')
        .waitForElementVisible('@popup')
        .click('@popup')
        .waitForElementVisible('@searchBar')
        .click('@searchBar')
        .setValue('@searchBar', searchBar)
        .click('@magSearch')
        .click('@search')
        .expect.element('@cardTitle').to.have.value.which.contains(searchBar)

        
        // .click('@list')
        // .click('@start')
        // .click('@title')
        // .setValue('@title', title)
        // .click('@desc')
        // .setValue('@desc', description)
        // .click('@cat')
        // .setValue('@cat', category)




    // fillout
    //     .useXpath()
    //     .waitForElementVisible('//li[text()="New Employee"]')
    //     .click('//li[text()="New Employee"]')

    // fillout
    //     .clearValue('@name')
    //     .setValue('@name', name)
    //     .clearValue('@phone')
    //     .setValue('@phone', phone)
    //     .clearValue('@email')
    //     .setValue('@email', email)
    //     .clearValue('@title')
    //     .setValue('@title', title)
    //     .click('@save')
    // fillout
    //     .expect.element('@name').to.have.value.that.equals(name)
 
    // fillout
    //     .click('@delete')
    //     // .waitForElementNotPresent(`//li[text()="${name}"]`, 10000)
    //     .api.acceptAlert()
    //     .pause(1000)


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
    //Test Case https://dmutah.atlassian.net/browse/QO2JB-31
    'valid': browser => {
        yood
            searchSite(yood, 'Refrigerator')
       
    },

}
        
        