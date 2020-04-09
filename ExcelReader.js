import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
import {Workbook, Row, Cell, Worksheet} from 'exceljs';
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Excel File Operations', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// create object for workbook
		var wb = new Workbook();
		// read xlsx file type
		wb.xlsx.readFile("C:\Users\Shiv\Desktop\Bio Data.xlsx").then(function(){
			//sheet object
			let sheet:Worksheet = wb.getWorksheet("Sheet1");

			let totalRowsIncludingEmptyRows:number = sheet.rowCount;
			console.log("total nuumber of rows : "+totalRowsIncludingEmptyRows);
			for(let i=1; i <= totalRowsIncludingEmptyRows; i++){
				let cellValue = sheet.getRow(i).getCell(2).toString();
				console.log("Column B value from the row '"+i+"' : "+ cellValue)
			}
		});
	});
});