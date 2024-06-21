var text = document.getElementById("display")

function addTheNumber(number){
    text.value += number;
}
function addTheSymbol(operator){
    text.value += operator;
}
function deleteOnDisplay(){
    text.value = '';
}
function operateToValue(){
    text.value = eval(text.value);
}

// var button = document.getElementsByTagName("button")[1];

// var btnList = []
// btnList.push(button);
// console.log(btnList)

//
// console.log(characters)
// var charReverse = characters.reverse()
// console.log(charReverse)
// console.log(charReverse.pop())
// console.log(charReverse)

// Array to print length
var characters = ["Tanjiro","Itadori","Sukuna","Gojo"]

console.log(characters)
console.log(characters.length);

// function to print array length
var charName = [];
function animeCharacters (names){
    names += characters;
}
animeCharacters();

// Print the array value without repeating it

var num = [23,55,84,23,70]

var update = new Set(num)
console.log(update)

var fruits = ["Apple","Kiwi","Chiku","Pineapple","Apple","Pineapple","Orange"]
console.log(fruits)

var filFruits = new Set(fruits)
console.log(filFruits)

// Find out the maximum value in the array list
// 1. apply method
var numbers = [12,43,65,45,12,65,88,92]

var maxList = Math.max.apply(null,numbers);
console.log(maxList)

// 2. Max and spread operator
var spreadArr = Math.max(...numbers);
console.log(spreadArr)

// 3. Math.max method
// var maxValue = Math.max(...numbers)
// console.log(maxValue)

// Find the index of the array element
var fruits = ["Apple","Kiwi","Chiku","Pineapple","Apple","Pineapple","Orange"]

console.log(fruits.indexOf("orange"))