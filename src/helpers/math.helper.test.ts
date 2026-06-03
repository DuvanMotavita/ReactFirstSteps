import {describe, expect, test} from 'vitest';
import { add, divide, multiply, substract } from './math.helper';


describe('Add', ()=>{
    
    test('Should add two positive numbers correctly', () => {
    
        //Arrange
        const a = 2;
        const b = 3;
        //Act
        const result = add(a, b);
        //Assert
        expect(result).toBe(a+b);
    
    });

    test('Should add two negative numbers correctly', () => {
    
        //Arrange
        const a = -2;
        const b = -3;
        //Act
        const result = add(a, b);
        //Assert
        expect(result).toBe(a+b);
    
    });
    
});
describe('Substract', ()=>{
    
    test('Should substract two positive numbers correctly', () => {
    
        //Arrange
        const a = 2;
        const b = 3;
        //Act
        const result = substract(a, b);
        //Assert
        expect(result).toBe(a-b);
    
    });

    test('Should substract two negative numbers correctly', () => {
    
        //Arrange
        const a = -2;
        const b = -3;
        //Act
        const result = substract(a, b);
        //Assert
        expect(result).toBe(a-b);
    
    });
    
});
describe('Multiply', ()=>{
    
    test('Should multiply two positive numbers correctly', () => {
    
        //Arrange
        const a = 2;
        const b = 3;
        //Act
        const result = multiply(a, b);
        //Assert
        expect(result).toBe(a*b);
    
    });

    test('Should multiply two negative numbers correctly', () => {
    
        //Arrange
        const a = -2;
        const b = -3;
        //Act
        const result = multiply(a, b);
        //Assert
        expect(result).toBe(a*b);
    
    });
    
});

describe('Divide', ()=>{    
    test('Should divide two positive numbers correctly', () => {
    
        //Arrange
        const a = 6;
        const b = 3;
        //Act
        const result = divide(a, b);
        //Assert
        expect(result).toBe(a/b);
    });
});

