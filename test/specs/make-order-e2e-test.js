function fillTheForm(element,value) {
    $(element).waitForExist()
    $(element).setValue(value)
}
function clickButton(element) {
    $(element).moveTo(0,1000)
    $(element).click()
}
function addAllProducts(elements){
    console.log('Elements length = ' + elements.length)
    elements.forEach( element => {
        browser.pause(1000)
        $(element).click()
        return(elements.length)
    })

}

describe('Make order on the SauceDemo', () => {
    it('Login to shop', () => {
        browser.url('https://www.saucedemo.com')
        fillTheForm('#user-name','standard_user')
        fillTheForm('#password','secret_sauce')
        clickButton('#login-button')
        browser.pause(2000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Add products to the card', () => {
        addItem = $$('//button[contains(text(),"ADD TO CART")]')
        addAllProducts(addItem)
        cardItems = $('#shopping_cart_container > a > span')
        expect(cardItems.getText()).toMatch((addItem.length).toString())
        
    })
    it('Checkout on card page', () => {
        browser.url('https://www.saucedemo.com/cart.html')
        // checkoutButton = '//button[contains(text(),"CHECKOUT")]'
        clickButton('//button[contains(text(),"CHECKOUT")]')
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html') 
    })
    it('Fill personal info', () => {
        browser.url('https://www.saucedemo.com/cart.html')
        fillTheForm('#first-name','Oksana')
        fillTheForm('#last-name','TTTT')
        fillTheForm('#postal-code','11111')
        clickButton('//input[contains(@value,"CONTINUE")]')
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html') 
    })
    it('Finish order', () => {
        clickButton('//a[contains(text(),"FINISH")]')
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html') 
        const confirmation = $('#checkout_complete_container > div')
        expect(confirmation.gettext()).toMatch('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })

    
})