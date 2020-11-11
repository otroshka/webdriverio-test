describe('Main page validation', () => {
    it('Navigate to URL', () => {
        browser.url('https://www.saucedemo.com')
    })
    it('Validate title', () => {
        const title = browser.getTitle()
        expect(title).toBe('Swag Labs')
    })
    it('Image validation', () => {
        const image = $('body > div.login_wrapper > div.login_wrapper-inner > img')
        expect(image.isExisting()).toBe(true)
    })
    it('Login button text', () => {
        const loginButtonText = $('#login-button')
        expect(loginButtonText.getValue()).toMatch('LOGIN')
    })
})