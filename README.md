# COMP0034 Introduction to JavaScript

Code for the intro to JavaScript lecture.

####   Exercise 1 Named function

In the javascript console of a browser, write a function that will find the fraction with the greater decimal value 
from 2 fractions passed as arguments. It should output text to the console to indicate which was greater of the two.

Call your function to test the output.


```
//General syntax for a function
function functionName(argument1,argument2,...){
 //code
}

//To execute a function
functionName();

```


**Optional: Anonymous function**

Create a copy of your solution named function. Restructure the function so that it is an anonymous function.

```
//Anonymous function
function(parameters) {
     statements;
}
var varName = function()                                                            
```


**Optional: Immediately invoked function**

Create a copy of your anonymous function. Restructure the function so that it is an immediately invoked function.

```
//Immediately invoked function
function(parameters) {
     statements;
}()
var varName = function()                                                            
```

#### Exercise 2 DOM
Write JavaScript to alter the dom.html page:
* Find the 5th paragraph (arrays start at 0) and change the class to ````.text-uppercase ````
    * Hint:  ```document.querySelectorAll('tagName')[0].className = "styleName";```

* Add a new image ```<img src=”img/logo.jpg" class="rounded”>``` somewhere on the page.
    * Hint: you can set src and class in the same way as innerHTML

#### Exercise 3 Event handling
Modify events.html and events.js:
* Add an event handler to the form so that ```”onsubmit”``` the function ```processForm()``` is executed a new <p> element is added to the end of the page with the email address
    * Hint: you can access the value of a form field using ```querySelector(‘id’).value;```
* Add an event listener so that when the form is submitted an alert is shown that displays the message (“Hello, name ” ), where name is the email address entered in the form
