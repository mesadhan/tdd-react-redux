import BlogPost from './BlogPost'
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../utils';


const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const component = shallow(<BlogPost store={store} />).childAt(0).dive();
    //console.log( component.debug() );
    return component;
};

describe('BlogPost Component', () => {

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
        let c = findByTestAttr(component, 'blogPostComponent');
        expect(c.length).toBe(1);
    });


    it('Should updateState method update state as expected', () => {
        const classInstance = component.instance();
        classInstance.updateStateHideBtn();

        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('Should method return value as expected', ()=> {
        const classInstance = component.instance();
        let value = classInstance.updateGivenNumber(34);
        //console.log('messae', value);
        expect(value).toBe(35)
    });

});
