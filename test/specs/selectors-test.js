function waitAndClick(element){
    $(element).waitForExist()
    $(element).click()
}

describe('WebDriverIO Selectors test', () => {
    it('Navigate to URL', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Validate CSS selector', () => {
        $('.login_wrapper-inner>div>div>form>input:nth-child(1)').isExisting()
    })
    it('Validate element by Link Text', () => {
        $('*=Accepted usernames are').isExisting()
    })
    it('Validate element by id', () => {
        $('#user-name').isExisting()
    })
    it('Click login without credentials', () => {
        $("//input[contains(@value, 'LOGIN')]").click()
        browser.pause(2000)
        expect($('.error-button').isDisplayed()).toBe(true)
        expect($('#login_button_container > div > form > h3')).toHaveTextContaining('Epic sadface: Username is required')
    })
    it('Click error button', () => {
        waitAndClick('.error-button')
        browser.pause(2000)
        expect($('.error-button').isExisting()).toBe(false)
    })
})