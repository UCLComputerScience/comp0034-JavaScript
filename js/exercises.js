//Exercise 1 Named function

function findBiggest(firstFraction,secondFraction){
    var result;
    if (firstFraction>secondFraction){
        result = "The first fraction is bigger: " + firstFraction + " than the second fraction: " + secondFraction;
    } else {
        result = "The second fraction is bigger: " + secondFraction + " than the first fraction: " + firstFraction;;
    }
    return result;
}

console.log(findBiggest(2/3,7/12));

//Exercise 2 Anonymous function

var biggest = function(firstFraction,secondFraction){
    var result;
    if (firstFraction>secondFraction){
        result = "The first fraction is bigger: " + firstFraction + " than the second fraction: " + secondFraction;
    } else {
        result = "The second fraction is bigger: " + secondFraction + " than the first fraction: " + firstFraction;;
    }
    return result;
}

console.log(biggest(2/3,7/12));

//Exercise 3 Self-invoking function

var biggest = (function(firstFraction,secondFraction){
    var result;
    if (firstFraction>secondFraction){
        result = "The first fraction is bigger: " + firstFraction + " than the second fraction: " + secondFraction;
    } else {
        result = "The second fraction is bigger: " + secondFraction + " than the first fraction: " + firstFraction;;
    }
    return result;
})(2/3,7/12)

console.log(biggest);