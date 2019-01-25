# COMP0034 Introduction to JavaScript

Code for the intro to JavaScript lecture.

####   Exercise 1 Named function

In the java console of a browser, write a function that will find the fraction with the greater decimal value 
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


#### Exercise 2 Anonymous function
Create a copy of your solution to exercise 1. Restructure the function so that it is an anonymous function.

```
//Anonymous function
function(parameters) {
     statements;
}
var varName = function()                                                            
```


#### Exercise 3 Immediately invoked function
Create a copy of your solution to exercise 2. Restructure the function so that it is an immediately invoked function.

```
//Immediately invoked function
function(parameters) {
     statements;
}()
var varName = function()                                                            
```

#### Exercise 4 DOM
Write JavaScript to alter the dom.html page:
* Find the 5th paragraph (arrays start at 0) and change the class to ````.text-uppercase ````
    * Hint:  ````document.querySelectorAll('tagName')[0].className = "styleName";````

