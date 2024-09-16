import { Component } from '@angular/core';
import { StringCalculatorService } from '../string-calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  input: string = '';
  result: number | null = null;
  error: string | null = null;
  

  constructor(private calculatorService: StringCalculatorService) {}

  calculate() {
    try {
      this.result = this.calculatorService.add(this.input);
      this.error = null;
    } catch (e: any) {
      this.error = e.message;
      this.result = null;
    }
  }
}
