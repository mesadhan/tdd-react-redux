
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';



describe('Index Component', () => {
    it('Should render without error', () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.headerComponent');
        //console.log(component.debug());
        //console.log('message', wrapper.length);
        expect(wrapper.length).toBe(1)
    })

    it('Should render Image Logo', ()=> {
        const component = shallow(<Header/>);
        const logoImage = component.find('.logoImage');
        expect(logoImage.length).toBe(1);
    });
});