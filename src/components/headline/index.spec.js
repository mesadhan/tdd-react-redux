import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from './../../../utils'



const setUp =(props = {}) => {
    return shallow(<Headline {...props}/>);
}


describe('Headline Component', () => {

    describe('Have props', () => {

        let component;
        beforeEach(()=> {
            const props = {
                header: 'Post 1',
                description: 'Description 1'
            }
            component = setUp(props);
        });

        it('Should render without error', ()=> {
            const c1 = findByTestAttr(component, 'headlineComponent');
            expect(c1.length).toBe(1);
        });

        it('Should render headline', ()=> {
            const h = findByTestAttr(component, 'headline');
            expect(h.length).toBe(1)
        });

        it('Should render description', ()=> {
            const d = findByTestAttr(component, 'description');
            expect(d.length).toBe(1)
        })
    });
    
    describe('Have no props', () => {
        let component;
        beforeEach(()=> {
            component = setUp();
        });

        it('Should render without error', ()=> {
            const c1 = findByTestAttr(component, 'headlineComponent');
            expect(c1.length).toBe(0);      // no props, should not render
        });
    });
});