
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from './../../../utils'


const setUp =(props = {}) => {
    return shallow(<Header {...props}/>);
}


describe('Index Component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1)
    });

    it('Should render Image Logo', ()=> {
        const logoImage = findByTestAttr(component, 'logoImage');
        expect(logoImage.length).toBe(1);
    });
});