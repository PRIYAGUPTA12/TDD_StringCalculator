import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(service.add('5')).toBe(5);
    expect(service.add('10')).toBe(10);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(service.add('1,2')).toBe(3);
    expect(service.add('10,20')).toBe(30);
  });

  it('should return the sum of multiple numbers separated by commas', () => {
    expect(service.add('1,2,3')).toBe(6);
    expect(service.add('5,10,15')).toBe(30);
  });
  it('should return the sum of multiple numbers separated by commas', () => {
    expect(service.add('1,2,,,3')).toBe(6);
    expect(service.add(',')).toBe(0);
  });
  it('should return the sum of multiple numbers separated by commas', () => {
    expect(service.add('1\n2,3')).toBe(6);
    
  });
  it('should return the sum of multiple numbers separated by new line', () => {
    expect(service.add('1\n3')).toBe(4);
    
  });
  it('should return the sum of multiple numbers separated by new line', () => {
    expect(service.add('/n2/n5')).toBe(7);
    
    
  });
  it('should return the sum of multiple numbers separated by combination of comma,new line,semicolon ', () => {
    expect(service.add('/n2/n5;6')).toBe(13);
       
  });
  it('should return the sum of multiple numbers separated by different delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
       
  });



});
