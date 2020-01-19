
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp =(props = {}) => {
    return shallow(<Header {...props}/>);
}

describe('Index Component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    });

    it('Should render without error', () => {
        const wrapper = component.find(`[data-test='headerComponent']`);
        expect(wrapper.length).toBe(1)
    })

    it('Should render Image Logo', ()=> {
        const logoImage = component.find(`[data-test='logoImage']`);
        expect(logoImage.length).toBe(1);
    });
});