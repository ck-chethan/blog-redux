import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async distpatch => {
    const response = await jsonPlaceholder.get('/posts');

    distpatch({
        type: 'FETCH_POSTS',
        payload: response
    });
};