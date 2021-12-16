import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom'

describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe de mostrar el componente AddCategory ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value ='Hola Mundo'
        input.simulate('change',{target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe de postear la información on submit', () => {

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();

        
    });

    test('Debe de llamar el SetCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value ='Hola Mundo'
        input.simulate('change',{target:{value}});

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value').trim()).toBe('');





    })
    
    
    
    
})
