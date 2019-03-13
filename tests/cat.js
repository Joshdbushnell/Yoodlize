var yood = {}


let cat = [
    '@tools',
    '@gear',
    '@electronics',
    '@party',
    '@venues'
    

]


let catSite = (placeholder, thingsToClick) => {
    thingsToClick.forEach(thingToClick => {
        placeholder
            .waitForElementVisible('@app')
            .click('@home')
            .waitForElementPresent(thingToClick)
            .click(thingToClick) 
            .expect.element('@keyword').text.to.contain('category').before(5000)
    })
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

    'Categories': browser => {
        yood
            catSite(yood, cat)
    },


}