import React from "react";
import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import Login from './login';

Enzyme.configure({ adapter: new Adapter() });

describe('Login',()=>{
    it('should show text' , () =>{
        const wrapper = shallow(<Login/>);
        const text = wrapper.find('div div');
        expect(text.text()).toBe('text goes here');
        expect(a).toBe(true);
    })
});
