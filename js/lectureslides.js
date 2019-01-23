/*var a = 5;
var b = 4;
var result;
if (a = b) {
    result = true;
} else {
    result = false;
}
console.log(result);  // outputs true as a is assigned the value of b

var a = 5;
var b = "5";
var result;
if (a == b) {
    result = true;
} else {
    result = false;
}
console.log(result);  // outputs true as JavaScript recognises the string only contains a number and treats it as a number

var a = 5;
var b = "5";
var result;
if (a === b) {
    result = true;
} else {
    result = false;
}
console.log(result);  // outputs false as JavaScript forces the string to be interpreted as a string and not as a number

//Create an array using an array literal
var progMinor = ["comp0015", "comp0034", "comp0035"];

//Create an array using an the JavaScript keyword new
var progMinor = new Array("comp0015", "comp0034", "comp0035");

//Access or assign the elements of an Array
var courseCode = progMinor[0];
progMinor[2] = "Systems Engineering";

//Access the full array
var courseList = progMinor;
console.log(progMinor);

//Arrays are objects
var len = progMinor.length;
progMinor.pop(); //remove last element
progMinor.push("COMP0035"); //add elements to the array

//To define an object with properties
var student = {
    firstname: "Jo",
    lastname: "Bloggs"};

//A JavaScript object can have properties and methods (called functions in JavaScript)
var person = {
    firstname: "Jo",
    lastname: "Bloggs",
    fullName: function () {
        return this.firstname + " " + this.lastname;
    }
};

//Access the properties of an object using objectName.propertyName or objectName["propertyName"]
console.log(person.lastname);
console.log(person["lastname"]);

//Access a method of an object using objectName.methodName()
console.log(person.fullName());

//Function syntax
function functionName(){
    //Code block
}

*/

//Create an object constructor
function Person(firstname, lastname, height, dateOfBirth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.height = height;
    this.dateOfBirth = dateOfBirth;
    this.getFullname = function () {
        return this.firstname + " " + this.lastname;
    };
    this.calculateAge = function () {
        var birthDate = new Date(dateOfBirth);
        var diff_ms = Date.now() - birthDate.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}

//Create a new person, get their firstname and height and calculate their age
var person1 = new Person("Jo", "Bloggs", 2.1, "12/30/1969");
console.log(person1.firstname); //dot notation
console.log(person1["height"]);  //bracket notation
console.log(person1.calculateAge());

