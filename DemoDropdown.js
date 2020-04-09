wdescribe('element demo',function() {
	function calc(a,b,c)
	
	{element(by.model("first")).sendKeys(a);
	
	element(by.model("second")).sendKeys(b);
		
		
		element.all(by.tagName("option")).each(function(item1)
				{
					item1.getAttribute("value").then(function(values)
							
					{
						console.log(values)
						if(values==c)
							{
							item1.click();
							}
					})
				}		
				)
				element(by.id("gobutton")).click();
	}
	it('Locators',function() { 
		
		//write your code
		
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		//element(by.model("first")).sendKeys("3");
		
		//Handling dropdown 
		
		calc(3,4,"MULTIPLICATION")
			calc(8,4,"DIVISION")
			calc(8,4,"ADDITION")
		
		
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
