import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../../utils'
import Nav from './index';

const setUp =(props = {}) => {
    return shallow(<Nav/>);
};


describe('Index Component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'navComponent');
        expect(wrapper.length).toBe(1)
    });

});
