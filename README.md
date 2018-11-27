##Curtain Co. Ordering Portal Order entry page

You are required to create an online ordering portal page. Users should be able to add details such as their contact details and customise types of curtains or blinds for each room. Create the page as per the user specifications below. Note that a server has been created for you. 

##User Acceptance criteria:

- The table should support backward and forwards navigation using tabs
- Pressing tab from the last cell in the table should create a new row
- You must load and display the suburbs, material and colours from the given server
- There must be a functional save button
- Saved data must be restored on refresh or page load

##Connecting to the server:

- The server binary will be available here
- The jar file should run by double-clicking, popping up a dialog with connection details
- Otherwise, it can be run on your command line with java -jar server-1.0.3.jar
- Closing the dialog will stop the server
- You can confirm the server is loaded correctly by visiting http://localhost:8181/openapi.json in the browser

##Technical details:

- Develop to your preferred javascript stack, eg. React, Angular, Vue, Jquery
- Target latest chrome version
- Creating art and other assets is not required, use placeholders as necessary
- There is no need to implement more than this single page, nor to support multiple different orders at the same time
- There is API to support saving and reloading the page without losing data, it will return anything you post to it

## Developer Coments

- Press "Add" to add a New Customer.
- Press the Green Button on the last row on the table for add a new row(loads aswell some dummy data).
- Press the red button next to every row, to delete. 
- The options are loaded from the given API.
- Press "check out" to add a new Customer and reload the page.
- To add a new Customer you must enter a name(basic validation).


