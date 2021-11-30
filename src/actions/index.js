import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    //Even with this approach we'll run into an issue we won't get the data in the reducers.
    const promise = jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};