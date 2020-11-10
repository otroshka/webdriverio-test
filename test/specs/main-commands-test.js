describe('WebDriverIO Selectors test', () => {
    it('Navigate to URL', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Find number od elements and their text', () => {
       browser.pause(2000)
       const elements =  $$('.login_wrapper-inner>div>div>form>input')
       console.log('Elements length = ' + elements.length)
       elements.forEach( element => {
           console.log(element.getText())
       })
    })
    it('Validate elements properties', () => { 
       // Get placeholder value
       let userName = $('#user-name').getAttribute('placeholder')
       console.log('Plaseholder value is: ' + userName)
       expect(userName).toMatch('Username')
       // Get Css property
       let pasWord = $('#password').getCSSProperty('font-size')
       console.log(pasWord)
       expect(pasWord.value).toMatch('18px')
    })
    it('Login into system with valid credentials', () => { 
       $('#user-name').setValue('standard_user')
       $('#password').setValue('secret_sauce')
       expect($('#login-button').isClickable()).toBe(true)
       $('#login-button').click()
       browser.pause(2000)
       expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})