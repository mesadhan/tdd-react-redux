import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../utils'
import App from './App';

const setUp = (props = {}) => {
    return shallow(<App />);
}


describe('App Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = findByTestAttr(component, 'appComponent');
        //console.log('NODE_ENV', process.env.NODE_ENV);
        expect(wrapper.length).toBe(1)
    });

});