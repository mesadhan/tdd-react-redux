import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../utils'
import SharedButton from './index';


describe('Shared Button Component', () => {

   
    describe('Checking PropTpes', () => {

        it('Should not throwing warning', () => {
            const expectedProps = {
                buttonText: 'Example Button',
                emitEvent: () => {

                }
            }

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', ()=> {
        let component;

        beforeEach(() => {
            const props = {
                buttonText: 'Button 1',
                emitEvent: () => {

                }
            };

            component = shallow(<SharedButton {...props}/>);
        });

        it('Should render a button', () => {
            let button = findByTestAttr(component, 'buttonComponent');
            expect(button.length).toBe(1);
        });



    });

});