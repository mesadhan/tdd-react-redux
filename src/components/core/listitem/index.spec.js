import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../../utils'
import ListItem from './index';


describe('ListItem Component', () => {

    describe('Checking PropTpes', () => {

        it('Should not throwing warning', () => {
            const expectedProps = {
                title: 'title 1',
                description: 'title 1'
            }

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Should Renders', ()=> {
        let component;
        beforeEach(()=> {
            const props = {
                title: 'Example title',
                description: 'Example Description'
            }

            component = shallow(<ListItem {...props} />);
        });
         
        it('Should render a ItemList', () => {
          let itemList = findByTestAttr(component, 'listItemComponent');
          expect(itemList.length).toBe(1);
        });

        it('Should render a title', ()=> {
            let title = findByTestAttr(component, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a description', ()=> {
            let title = findByTestAttr(component, 'componentDescription');
            expect(title.length).toBe(1);
        });
    });

    describe('Should Not Renders', ()=> {
        let component;
        beforeEach(()=>{
            component = shallow(<ListItem/>);
        });

        it('Component is not render', () => {
            let listItem = findByTestAttr(component, 'listItemComponent');
            expect(listItem.length).toBe(0);
        });
    });

});
