import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils'
import About from './About';

const setUp =(props = {}) => {
    return shallow(<About/>);
}


describe('About Component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'aboutComponent');
        expect(wrapper.length).toBe(1)
    });

});
