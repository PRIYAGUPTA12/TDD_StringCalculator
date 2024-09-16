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

    // Split the string by commas (or new lines) and convert each number from string to integer
    const numArray = numbers.split(",").map(num => parseInt(num, 10));

    // Sum the numbers and ignore NaN values
    return numArray.reduce((sum, currentNum) => {
      return sum + (isNaN(currentNum) ? 0 : currentNum);
    }, 0);
    
  }
}
