"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an array of locations
var locations = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Sydney",
    "Berlin",
    "Beijing",
    "Rio de Janeiro",
];
// Print your array in its original order..  
console.log(locations);
// Print your array in alphabetical order without modifying the actual list.
var locations_2 = [...locations];
console.log(locations_2.sort());
//  Show that your array is still in its original order by printing it.  
console.log(" original order", locations);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order without changing original.", locations_2.reverse());
// Show that your array is still in its original order by printing it again.
console.log("original order", locations);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log(locations.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(locations.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(locations.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(locations.reverse());
