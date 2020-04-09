describe('element demo',function() {
	
	
	it('Locators',function() { 
		
		//write your code
		
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("3");
		
		element(by.model("second")).sendKeys("5");
			
			element(by.id("gobutton")).click();
			
			//jasmine takes care resolving promise
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
			
			element(by.css("h2[class='ng-binding']")).getText().then(function(text){
				
			console.log(text);
			})
			//Real output will display when you resolve promise, if promose is not  resolves 1 Sequence is not gauranted 2
			
				
	} )
	
	
}
)
