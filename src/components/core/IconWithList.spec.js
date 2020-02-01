import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../../utils'
import IconWithList from './IconWithList';


describe('IconWithList Component', () => {

    describe('Checking PropTpes', () => {

        it('Should not throwing warning', () => {
            const expectedProps = {
                name: 'item 1',
                icon: 'icon',
                ratings: {}
            };
            const propsError = checkProps(IconWithList, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Should Renders', () => {
        let component;
        beforeEach(() => {
            const props = {
                name: 'item 1',
                icon: 'icon',
                ratings: {
                    avgStars: 1,
                    totalPoints: 1,
                    numberVotes: 1
                },
            };
            component = shallow(<IconWithList {...props} />);
        });

        it('Should render a ItemList', () => {
            let itemList = findByTestAttr(component, 'IconWithListComponent');
            expect(itemList.length).toBe(1);
        });

        it('Should render a name', () => {
            let title = findByTestAttr(component, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a Icon', () => {
            let title = findByTestAttr(component, 'componentIcon');
            expect(title.length).toBe(1);
        });

        it('Should render a Stars', () => {
            let title = findByTestAttr(component, 'componentStars');
            expect(title.length).toBe(1);
        });

        it('Should render a Points', () => {
            let title = findByTestAttr(component, 'componentPoints');
            expect(title.length).toBe(1);
        });

        it('Should render a Votes', () => {
            let title = findByTestAttr(component, 'componentVotes');
            expect(title.length).toBe(1);
        });
    });

    describe('Should Not Renders', () => {
        let component;
        beforeEach(() => {
            component = shallow(<IconWithList/>);
        });

        it('Component is not render', () => {
            let listItem = findByTestAttr(component, 'IconWithListComponent');
            expect(listItem.length).toBe(0);
        });
    });

});
