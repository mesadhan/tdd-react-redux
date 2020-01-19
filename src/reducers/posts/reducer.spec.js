import { types } from './../../actions/types';
import postReducer from './reducer'

describe('Posts Reducer', () => {

    it('Should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', ()=> {
        const posts = [
            { title: 'title 1',description: 'description 1' },
            { title: 'title 2',description: 'description 2' }
        ];
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(posts).toEqual(posts);
    });
    
});