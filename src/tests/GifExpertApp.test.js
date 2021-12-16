import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp'


describe('Pruebas en <GifExpertApp/>', () => {
    
    
    test('Se debe mostrar correctamente ', () => {
        
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Piece','Goku'];
        const wrapper = shallow(<GifExpertApp defaultCategiries={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
    
})
