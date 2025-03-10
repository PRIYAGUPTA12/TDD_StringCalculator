import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }
// simple string calculator with input is a string of comma-separated numbers and output is an integer, sum of the numbers
  add(numbers: string): number {
     if (!numbers) {
      return 0;
    }
    const delimiter =/[ ,\n\r;\\n]+/;
   
    // Split the string by commas (or new lines) and convert each number from string to integer
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
    }

    // Sum the numbers and ignore NaN values
    return numArray.reduce((sum, currentNum) => {
      return sum + (isNaN(currentNum) ? 0 : currentNum);
    }, 0);
    
  }
}
