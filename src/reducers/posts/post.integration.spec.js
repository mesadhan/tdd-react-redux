import { testStore } from './../../../utils';
import { fetchPosts, fetchFortnitePosts } from './../../actions';

describe('fetch api action', () => {

    let store;
    beforeEach(() => {
        store = testStore();
    });

    it('Store is updated correctly', () => {

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();

                //console.log('response', newState.posts[0]);
                //expect(newState.posts[0].title).not(undefined);
                expect(newState.posts[0]).toHaveProperty('title');
                expect(newState.posts[0]).toHaveProperty('body');

            });
    });

    it('Store is update with Fortnite api data correctly', () => {

        const store = testStore();
        return store.dispatch(fetchFortnitePosts())
        .then(() => {
            const newState = store.getState();
            //console.log('output', newState.posts.data);
            
            expect(newState.posts.data[0]).toHaveProperty('itemId');
            expect(newState.posts.data[0].item).toHaveProperty('name');
            expect(newState.posts.data[0].item.images).toHaveProperty('icon');
            
        });

    });

});
