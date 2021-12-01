import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    return async function (distpatch, getState) {
        const response = await jsonPlaceholder.get('/posts');

        distpatch({
            type: 'FETCH_POSTS',
            payload: response
        });
    };
};