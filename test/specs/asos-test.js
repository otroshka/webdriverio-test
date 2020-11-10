describe('ASOS homepage', () => {
    it('should display the correct homepage title', () => {
        browser.url('http://asos.com');
        const title = browser.getTitle();
        const women = $('#globalBannerComponent > div > div > div.src-GlobalBanner-Unit-Unit_unit.src-GlobalBanner-Unit-Unit_unitCenter > a:nth-child(1)')
        expect(browser).toHaveTitle(title, 'ASOS | Online Shopping for the Latest Clothes & Fashion');
        (women).waitForExist()
        console.log(women.getText())
        expect((women).getText()).toBe('WOMEN');
    });
});