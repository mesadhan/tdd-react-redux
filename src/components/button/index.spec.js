import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../utils'
import SharedButton from './index';


describe('Shared Button Component', () => {

   
    describe('Shared Button Component', () => {

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

});