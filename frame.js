describe('Alert window ',function() {  


it('Open non angular website',function() {
//moving the mouse into that textbox
//sendkeys
//keyboard arrow
//Keyboard enter{
	browser.waitForAngularEnabled(false)/// for non angular website 

	browser.get("http://qaclickacademy.com/practice.php");
	browser.manage().window().maximize();
	browser.switchTo().frame("courses-iframe")
	element(by.css("a[href='sign_in']")).getText().then(function(text)
	{
		console.log(text)
	}		
	)
	

	})

	
	

 


}) 




