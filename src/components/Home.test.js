import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../utils';
import Home from "./Home";


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const component = shallow(<Home store={store} />).childAt(0).dive();
    //console.log( component.debug() );
    return component;
};


describe('Home Component', () => {

    let component;
    beforeEach(() => {
        const initialState = {
            posts: [
                {title: 'title 1', body: 'Body 1'},
                {title: 'title 2', body: 'Body 2'},
                {title: 'title 3', body: 'Body 3'}
            ]
        };
        component =  setUp(initialState)
    });

    it('Should render without errors', () => {
        let c = findByTestAttr(component, 'homeComponent');
        expect(c.length).toBe(1);
    });

});
