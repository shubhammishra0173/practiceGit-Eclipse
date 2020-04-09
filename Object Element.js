var obj1=  require("./Object.js");
describe('element demo',function() {
	
	
	it('Locators',function() { 
		
		//write your code
		
		
		obj1.getURL();
		
		obj1.firstinput.sendkeys("3");
		obj1.secondinput.sendKeys("5");
			
			obj1.goButton.click();
			
			//jasmine takes care resolving promise
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
			
			element(by.css("h2[class='ng-binding']")).getText().then(function(text){
				
			console.log(text);
			})
			//Real output will display when you resolve promise, if promose is not  resolves 1 Sequence is not gauranted 2
			
				
	} )
	
	
}
)
