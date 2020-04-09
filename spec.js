describe('Protractor baby step',function() {
	
	
	it('basic program',function() { 
		
		//write your code
		
		browser.get('https://angularjs.org');//will hit url
		//Each it block will be called as spec
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function()// then keyword is used for resolving promise whatever we write inside this then it will be  executed first
				
		{
			console.log("I am executed last step");	
		});
		
		
	} )
	
	it('open angular website', function() { 
		
		//write code for second test casses
	})
}
)
// first parameter- Test suit name
// Second parameter -function(function will have all tests(it blocks )