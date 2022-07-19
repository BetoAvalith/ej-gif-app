import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif');

describe('Test en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('Debe mostrar inicialmente el loading ', () => {
        
        useFetchGif.mockReturnValue({
            imagenes: [],
            loading: true
        })
        
        render( <GifGrid category={category} /> )
        // screen.debug();

        expect( screen.getByText( 'Cargando...' ).innerHTML ).toBe('Cargando...');
        expect( screen.getByText( category ).innerHTML ).toBe(category);       

    });

    test('Debe mostrar items, cuando se cargan las imagenes en useFetchGifs', () => {
        
        useFetchGif.mockReturnValue({
            imagenes:[
                {id:'ABC123', title: 'Saitama', url:'https://onepunch/saitama.jpg'},
                {id:'ABC333', title: 'Garou', url:'https://onepunch/garou.jpg'},
            ],
            loading: false,
        })

        render( <GifGrid category={category} /> )
        
        expect( screen.getAllByRole('img').length ).toBe(2)

    });

});