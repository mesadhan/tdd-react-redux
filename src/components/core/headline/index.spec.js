import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkProps } from '../../../../utils'




const setUp =(props = {}) => {
    return shallow(<Headline {...props}/>);
}


describe('Headline Component', () => {

    describe('Check PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: "Post 1",
                description: "Description 1",
                persons: [{
                        firstName: 'abc',
                        lastName: 'Sarker',
                        email: 'example@gmail.com',
                        age: 26,
                        onlineStatus: false
                }]
              };

            let propsErr = checkProps(Headline, expectedProps);
            //console.log('message', propsErr);
            expect(propsErr).toBeUndefined();
        });
    });

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
