
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en GifGridItem', () => {
    
    const titulo = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={titulo} url={url}/>)

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(titulo);
    });
    
    test('Debe de tener una imagen igual al url y alt de los props', () => {
       const img = wrapper.find('img');
    //    console.log(img.props()); 
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);
    });

    test('Debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true) ;
    })
    
    
    
})
