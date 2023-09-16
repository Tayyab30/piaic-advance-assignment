"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stripWhitespace(name) {
    return name.trim();
}
const personNameWithWhitespace = "\t John Doe \t";
const strippedName = stripWhitespace(personNameWithWhitespace);
console.log(`\n Name with whitespace: "${personNameWithWhitespace}" \n`);
console.log(`Stripped name: "${strippedName}"\n`);
