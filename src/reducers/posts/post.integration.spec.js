import { testStore } from './../../../utils';
import { fetchPosts } from './../../actions';

describe('fetchPosts action', () => {


    it('Store is updated correctly', () => {

        const store = testStore();

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();

                //console.log('response', newState.posts[0]);
                //expect(newState.posts[0].title).not(undefined);
                expect(newState.posts[0]).toHaveProperty('title');
                expect(newState.posts[0]).toHaveProperty('body');

            });
    });
});