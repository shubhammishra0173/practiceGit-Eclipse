describe('Chain Locator Demo',function() {
	
	
	it('basic program',function() { 
		
		//write your code
		
	
		browser.get('http://juliemr.github.io/protractor-demo/')
		
		// repeater , Chain locator and css for identical tags
element(by.model("first")).sendKeys("3");
		
		element(by.model("second")).sendKeys("5");
			
			element(by.id("gobutton")).click();
			// syntex for multiple css path in dome
			element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)//for getting a result from row
					
			{
				console.log(text);
			});
			element(by.model("operator")).element(by.css("option:nth-child(4)")).getText().then(function(text)//for getting a result from row
					
					{
						console.log(text);
					});
	} )
	
	
}
)