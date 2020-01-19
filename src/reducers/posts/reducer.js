import { types } from './../../actions/types';
//import { type } from 'os';

let postReducer = (state=[], action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
}

export default postReducer;