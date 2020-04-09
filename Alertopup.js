describe('Alert window ',function() {  


it('Open non angular website',function() {
//moving the mouse into that textbox
//sendkeys
//keyboard arrow
//Keyboard enter{
	browser.waitForAngularEnabled(false)/// for non angular website 
	browser.waitForAngularEnabled(false);
	browser.get("http://qaclickacademy.com/practice.php");
	element(by.id("confirmbtn")).click();

	browser.switchTo().alert().dismiss().then(function()

	{
	//10sec
	browser.sleep(5000);
	})


 


}) })




