import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente GifGrid', () => {

    const category = 'One Piece';
    
    
    test('Debe de mostrar el componente', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });

        const wrapper = shallow(<GifGrid category ={category}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {


        const gifs =[{
            id:'abc',
            url:'localhost:2020',
            title: 'Prueba'
        },
        {
            id:'abc',
            url:'localhost:2020',
            title: 'Prueba'
        }];
            

        

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        
        const wrapper = shallow(<GifGrid category ={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        

        

    });
    
    
    
})
