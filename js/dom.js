//SELECTING ELEMENTS

// Get all elements matching specified selectors
document.querySelectorAll(".post-content p");

// Get a single element using its id
var myTitleLink = document.getElementById("aLink");
//OR
var myTitleLink = document.querySelector("#aLink");

console.log("This is a node of type: ", myTitleLink.nodeType);
console.log("Inner HTML: ", myTitleLink.innerHTML);
console.log("Child nodes: ", myTitleLink.childNodes.length);

// Get elements using the HTML tag name
var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);

//CHANGING AND ADDING ELEMENTS

// change alignment of the h1 element
var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");

// change content of the h1 element
var arrayOfH1s = mainContent.getElementsByTagName("h1");
//OR
var attayOfH1s = mainContent.querySelectorAll("h1");
arrayOfH1s[0].innerHTML = "This is a new title";
var newHeading = document.createElement("h1");

// to add content, either use innerHTML
newHeading.innerHTML = "I am a new heading!";

// OR create child nodes manually
var h1Text = document.createTextNode("I am a new heading!");
// and add them as child nodes to the new elements
newHeading.appendChild(h1Text);

// and we still need to attach them to the document!
document.body.appendChild(newHeading);
