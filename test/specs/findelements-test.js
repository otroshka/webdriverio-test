describe('WebDriverIO Selectors test', () => {
    it('Navigate to URL', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Validate CSS selector', () => {
       const elements =  $$('.login_wrapper-inner>div>div>form>input')
       console.log('Elements length = ' + elements.length)
       elements.forEach( element => {
           console.log(element.getText())
       })
    })
})