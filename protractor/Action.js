describe('Actions demo',function() {  


it('Open Posse website',function() {
//moving the mouse into that textbox
//sendkeys
//keyboard arrow
//Keyboard enter
browser.get("https://posse.com/");
element(by.model("userInputQuery")).sendKeys("river");
browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();



browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
{

browser.sleep(2000);

expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);//assertion for sizw in webpage


element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
element(by.css("a[ng-href*='London/River Island']")).click().then(function()
{
browser.sleep(2000);
browser.getAllWindowHandles().then(function(handles)
{
	browser.switchTo().window(handles[1]);// We can switch the window by name or handle	
	
	browser.getTitle().then(function(title)
			
	{
		console.log(title)//title of the child window
	})
	browser.switchTo().window(handles[0])
}		
)
		
 
})






})

})
})

