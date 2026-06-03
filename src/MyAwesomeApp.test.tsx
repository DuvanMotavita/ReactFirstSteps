import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render,screen } from "@testing-library/react";

describe('MyAwesomeApp', ()=>{

    test('Should render the component correctly firstName and lastName ', () => {  
        const {container} = render(<MyAwesomeApp/>);
        
        const h1  = container.querySelector('h1');
        expect(h1?.textContent).toContain('Duvan');
        const h3  = container.querySelector('h3');
        expect(h3?.textContent).toContain('Motavita');

    } );    
    test('Should render the component correctly firstName and lastName - screen ', () => {  
        render(<MyAwesomeApp/>);
        
        // const h1  = screen.getByRole('heading',{level: 1});
        const h1  = screen.getByTestId('first-name-title');

        expect(h1.innerHTML).toContain('Duvan');


    } );    

    test('Should match snapshot',()=>{
        const {container} = render(<MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
    });
    test('Should match snapshot - screen',()=>{
        render(<MyAwesomeApp/>);
        expect(screen.getByTestId('my-awesome-app')).toMatchSnapshot();
    });


})