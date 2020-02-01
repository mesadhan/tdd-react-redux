import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../utils'
import DetailsPage from './DetailsPage';

describe('DetailsPage Component', () => {

    describe('Checking PropTpes', () => {
        it('Should not throwing warning', () => {
            const expectedProps = {
                name: 'item 1',
                icon: 'icon',
                ratings: {}
            };
            const propsError = checkProps(DetailsPage, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Should Renders', () => {
        let component;
        beforeEach(() => {
            const props = {
                location: {
                    state: {
                        singlePost: {
                            name: null,
                            icon: null,
                            ratings: {
                                avgStars: 1,
                                totalPoints: 1,
                                numberVotes: 1
                            }
                        }
                    }
                }
            };
            component = shallow(<DetailsPage {...props}/>);
        });

        it('Component should render', () => {
            let listItem = findByTestAttr(component, 'detailsPageComponent');
            expect(listItem.length).toBe(1);
        });

        it('Component should render name', () => {
            let listItem = findByTestAttr(component, 'componentName');
            expect(listItem.length).toBe(1);
        });
    });
});
