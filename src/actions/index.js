import { types } from './types';

export const fetchPosts = () => async (dispatch) => {
    try {
        const url = "https://jsonplaceholder.typicode.com";
        const posts = await fetch(`${url}/posts?_limit=10`);
        const res = await posts.json();

        //console.log(res);

        dispatch({
            type: types.GET_POSTS,
            payload: res
        })

    } catch (error) {
        console.error("An error occurred");
        console.error(error);
    }
};