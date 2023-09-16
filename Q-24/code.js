"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name1 = "Usama";
var name2 = "Khalid";
var name3 = "Usama";
//  Tests for equality and inequality with strings
if (name1 == name3) {
    console.log("name1 is equal to name2....?", true);
    console.log(name1, name3);
}
else {
    console.log("name1 is equal to name2....?", false);
    console.log(name1, name3);
}
if (name1 == name2) {
    console.log("name1 is equal to name2....?", true);
    console.log("Name1", name1, "Name2", name2);
}
else {
    console.log("name1 is equal to name2....?", false);
    console.log("Name1", name1, "Name2", name2);
}
// Tests using the lower case function
function isLowerCase(input) {
    if (input === String(input).toLowerCase()) {
        console.log(`${input} is in Lower Case.`);
    }
    else {
        console.log(`${input} is not in Lower Case.`);
    }
}
isLowerCase(name1);
//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 12;
var num3 = 9;
function numericalTests(input1, input2) {
    if (input1 == input2) {
        console.log(`${input1} is equal to ${input2}.`);
    }
    else if (input1 > input2) {
        console.log(`${input1} is grater than ${input2}.`);
    }
    else if (input1 < input2) {
        console.log(`${input1} is less than ${input2}.`);
    }
    else {
        console.log(`${input1} is not equal to ${input2}.`);
    }
}
numericalTests(num1, num1);
numericalTests(num1, num2);
numericalTests(num1, num3);
// Tests using "and" and "or" operators
function logincalTest(marks) {
    if (marks == 80 || marks > 80) {
        console.log("Grade is A+");
        console.log("\n----------------------------------------------------------\n");
    }
    else if (marks > 40 && marks < 80) {
        console.log("Grade is B");
        console.log("\n----------------------------------------------------------\n");
    }
    else if (marks = 40 || marks < 40) {
        console.log("Grade is F");
        console.log("\n----------------------------------------------------------\n");
    }
}
var marksArray = [59, 40, 90];
for (var index in marksArray) {
    logincalTest(marksArray[index]);
}
// Test weahter an item is  in an array.
// Test weather an item is not in an array.
var fruits = ["apple", "banana", "cherry", "date"];
var itemToFind1 = "banana";
var itemToFind2 = "oringe";
findItem(itemToFind1);
findItem(itemToFind2);
function findItem(itemToFind) {
    var filteredArray = fruits.filter((fruit) => {
        return fruit === itemToFind;
    });
    if (filteredArray.length > 0) {
        console.log(itemToFind + " is in the array.");
        console.log("\n----------------------------------------------------------\n");
    }
    else {
        console.log(itemToFind + " is not in the array.");
        console.log("\n----------------------------------------------------------\n");
    }
}
