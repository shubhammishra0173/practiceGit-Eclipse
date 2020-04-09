describe('element demo',function() {
	function Add(a,b)
	
	{element(by.model("first")).sendKeys(a);
	
	element(by.model("second")).sendKeys(b);
		
		element(by.id("gobutton")).click();
	}
	it('Locators',function() { 
		
		//write your code
		
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		
		Add(2,5)
		Add(3,8)
		Add(3,6)
		Add(4,9)
		Add(45,67)
			element.all(by.repeater("result in memory")).count().then(function(text)
					
			{
				
				console.log(text)
			});
			element.all(by.repeater("result in memory")).each(function(item)// for calling multiple function and priniting the same we use each function
			{		
	item.element(by.css("td:nth-child(3)")).getText().then(function(text)
					
			{
				console.log(text);
			});
	
	})	
				
	} )
	
	
}
)
