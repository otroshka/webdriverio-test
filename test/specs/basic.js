describe('saucedemo.com main page', () =>{
    it('Title validation', () =>{
        browser.url('https://www.saucedemo.com')
        expect(browser).toHaveTitle('Swag Labs')
    })
    
})