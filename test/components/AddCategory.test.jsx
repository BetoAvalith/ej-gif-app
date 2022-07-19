import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Test en <AddCategory />', () => { 
    
    test('Debe cambiar el valor del input', () => {

        render( <AddCategory addCategory={()=>{}} /> )
        
        const input = screen.getByRole('textbox');

        fireEvent.change( input, {target: {value: 'Goku'}});
        
        expect(input.value).toBe('Goku');

    });

    test('Debe llamar la funcion addCategory si el input tiene valor', () => {
       
        const inputValue = 'Goku';

        const addCategory = jest.fn();

        render( <AddCategory addCategory={ addCategory } /> )

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');
        
        fireEvent.change( input, {target: {value: inputValue}});

        fireEvent.submit( form );
        
        expect( input.value ).toBe('');

        expect( addCategory ).toHaveBeenCalled();
        
        expect( addCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No se debe llamar la funcion addCategory, si el input esta vacio', ()=>{

        const addCategory = jest.fn();
        render( <AddCategory addCategory={addCategory} /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( addCategory ).not.toHaveBeenCalled();
    });

})