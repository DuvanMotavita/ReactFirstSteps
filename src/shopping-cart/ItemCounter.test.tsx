import { fireEvent, render,screen } from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import { ItemCounter } from './ItemCounter';


describe('ItemCounter',()=>{
    test('Should render with default values',()=>{
        const name = "Nintendo Controller";
        render(<ItemCounter name={name} />)
        expect(screen.getByText(name)).toBeDefined();

    });
    test('Should render with custom quantity',()=>{
        const name = "Nintendo Controller";
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />)
        expect(screen.getByText(quantity)).toBeDefined();

    });

    test('Should add one item when click on +1 button',()=>{
        render(<ItemCounter name="Nintendo Controller" quantity={1} />)

        const [buttonAdd] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });
    
    test('Should decrease one item when click on -1 button',()=>{
        const quantity = 5;
        render(<ItemCounter name="Nintendo Controller" quantity={quantity} />)
        const [,buttonSubtract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);
        expect(screen.getByText(quantity - 1)).toBeDefined();
    });

    test('Should not decrease one item when click on -1 button and quantity is 1',()=>{
        const quantity = 1;
        render(<ItemCounter name="Nintendo Controller" quantity={quantity} />)

        const [,buttonSubtract] = screen.getAllByRole('button');
        fireEvent.click(buttonSubtract);
        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('Should change to red when count is 1',()=>{
        const quantity = 1;
        const name = "Nintendo Controller";
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');

     });
    test('Should change to green when count is greater than 1',()=>{
        const quantity = 2;
        const name = "Nintendo Controller";
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('green');

     });

});