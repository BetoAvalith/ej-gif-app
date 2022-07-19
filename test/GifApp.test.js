import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe('Test en <GifApp />', () => { 

    function cargarGifs(){
        render(<GifApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change( input, {target: {value: 'Goku'}});
        fireEvent.submit( form );

        fireEvent.change( input, {target: {value: 'One Punch'}});
        fireEvent.submit( form );
    }
    
    test('Debe mostrar el estado inicial', () => {
        
        render(<GifApp />);
      
        const h3 = screen.queryByRole('heading', {level: 3})
       
        expect( h3 ).toBeFalsy();
    });

    test('Debe mostrar el cambio en el estado', async () => {
        
        cargarGifs();

        const text = await screen.findByText(/Goku/i);
        
        expect( text ).toBeTruthy(); 
    });

    test('Debe mostrar el cambio en el estado, otra forma', async () => {
        
        cargarGifs();
        
        await waitFor(
            ()=> expect( screen.getAllByRole('img').length ).toBeGreaterThan(0),
            {
                timeout: 2000
            } 
        )

        expect( screen.getAllByRole('img').length ).toBeGreaterThan(0);
    });

    
    test('Debe eliminar la categoria',  () => {
        
        cargarGifs();
        
        const button = screen.getAllByText(/X/i)[1];

        fireEvent.click( button );

        expect( screen.queryByText(/Goku/i) ).toBeFalsy();
        expect( screen.queryByText(/One Punch/i) ).toBeTruthy();

    });


    test('Debe resetear todas las categorias', () => {
        
        cargarGifs();

        const button = screen.getByText(/Reset/i);
        
        fireEvent.click( button );

        expect( screen.queryByText(/Goku/i) ).toBeFalsy();
        expect( screen.queryByText(/One Punch/i) ).toBeFalsy();        
    });


 })
