/* Variables and data types */

var foo;  //undefined
foo = "bar"; //String
foo = 'A string containining "quote" marks'; //String
foo = 16; //Number
foo = -16.556776876875; //Number
var isCorrect = true;  //Boolean
var empty = null; //null
typeof foo; //returns ‘number’


/* Operators */

5 + (2 * 10);
"Joe" + " " + "Bloggs"; //Using + in an expression with strings concatenates
//Short hand ways to use operators
var a = 5;
a++;   //returns 6
a += 4;  //returns 10
a *= 2;   // returns 20


/* Condition statements */

var hour = 8;
if (hour < 12) {
    alert("Good morning");
}

var hour = 8;
if (hour < 12) {
    alert("Good morning");
} else if (hour > 18) {
    alert("Good evening");
} else {
    alert("Good afternoon");
}


/* Equals  =   ==   === */

var a = 5;
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


/* Switch */
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

/* Loops (for, for in, while, do while) */
//for
var text = "";
var i;
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
//for in
var book = {
    author: "John Doe",
    ISBN: 121212121212,
    title: "This book"
};
var text = "";
var x;
for (x in book) {
    text += book[x];
}
//while
var x = 0;
while (x < 3) {
    console.log(x);
    x++;
}
// do while
var x = 0;
do {
    console.log(x);
    x++;
} while (x < 3);


/* Arrays */

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


/* Objects */
//To define an object with properties
var student = {
    firstname: "Jo",
    lastname: "Bloggs"
};

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
function functionName() {
    //Code block
}


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


/* Functions */
//Refer to exercises.js for examples of named, anonymous and self-invoking functions


/* Variable scope */
//Global variable
var count = 0;  //Global
function incr(n) {
    count += n;
}

function reset() {
    count = 0;
}

incr(4);
reset();
incr(2);
console.log(count);

//Function scope
function everything() {
    var count = 0;

    function incr(n) {
        count += n;
    }

    function reset() {
        count = 0;
    }

    incr(4);
    reset();
    incr(2);
    console.log(count);
}
everything();

//Block scope
if (true) {
    var x = 2;
    let y = 2;
}
console.log(x);
console.log(y);  //should give an error that y is undefined
