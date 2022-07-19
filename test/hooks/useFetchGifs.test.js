import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe('Test en hook useFetchGifs', () => {
    
    test('Debe regresar el estado inicial ', () => {
        
        const {result} = renderHook( ()=> useFetchGif('One Punch') );

        console.log(result)

        // TODO: Testear que el estado inicial sea el que corresponde.
        
        const { imagenes, loading } = result.current;

        expect( imagenes.length ).toBe(0);
        expect( loading ).toBeTruthy();

    });

    test('Debe retornar un arreglo de imagenes y el loading en false', async ()=>{

        const {result} = renderHook( ()=> useFetchGif('One Punch') );

        await waitFor(
            ()=> expect(result.current.imagenes.length).toBeGreaterThan(0)
        )

        const { imagenes, loading } = result.current;

        expect(imagenes.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();

    })    

});