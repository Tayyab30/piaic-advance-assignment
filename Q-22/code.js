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
console.log(`\nIntentional Error: ${locations[8]}\nThis error is because of there no index 8\nin locations array.\n`);
console.log(`\nMax index in locations array is 7 as you can see value of locations[7] is: ${locations[8]}.\n`);
