export{};

interface MathOperations {
  addNumbers(num1: number, num2: number): number;
  subtractNumbers(num1: number, num2: number): number;
}

const mathOperations: MathOperations = {
  /*
  Author: Tayyab
  Date: August 2, 2023
  Description: This program is about add 2 numbers.
  */

  addNumbers: function (num1: number, num2: number): number {
    return num1 + num2;
  },

  /*
  Author: Tayyab
  Date: August 2, 2023
  Description: This program is about subtract 2 numbers.
  */
  subtractNumbers: function (num1: number, num2: number): number {
    return num1 - num2;
  },
}

console.log(mathOperations.addNumbers(5,3));
console.log(mathOperations.subtractNumbers(10,2));