import { afterEach, describe, expect, test, vi } from "vitest";
import { render,screen } from "@testing-library/react";
import { FirstStepsApp } from "./FirstStepsApp";


const mockItemCounter = vi.fn( (props:unknown) => {
    return (<div data-testid="item-counter-mock" />)
}  );

vi.mock('./shopping-cart/ItemCounter', ()=> ({
    ItemCounter:(props:unknown) => mockItemCounter(props),
}));


// vi.mock('./shopping-cart/ItemCounter', ()=> ({
//     ItemCounter: (props: unknown) => <div data-testid="item-counter-mock" name={props.name} quantity={props.quantity} />
// }));

describe("FirstStepsApp", () =>{

    afterEach(()=>{
        vi.clearAllMocks();
    });

    test('should match snapshot',()=>{
        const {container } = render(<FirstStepsApp />)  
        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of itemCounter component',()=>{
        render(<FirstStepsApp />);

        const itemCounter = screen.getAllByTestId('item-counter-mock');

        expect(itemCounter.length).toBe(4);

    });

    test('should render itemCounter with correct props', ()=>{
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(4);
        expect(mockItemCounter).toHaveBeenNthCalledWith(1, {name: "Nintendo switch 2", quantity: 10});
        expect(mockItemCounter).toHaveBeenNthCalledWith(2, {name: "PlayStation 5", quantity: 5});
        expect(mockItemCounter).toHaveBeenNthCalledWith(3, {name: "Xbox Series X", quantity: 3});
        expect(mockItemCounter).toHaveBeenNthCalledWith(4, {name: "PC Gaming", quantity: 2});
    });


});