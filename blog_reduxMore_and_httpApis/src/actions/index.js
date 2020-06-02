import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

/*
knote: this function uses lodash library "_"
  -problem: we are making multiple API get requests for same postId and userIds blindly
  -we need to memoize what objects we have already pulled from server, and not make those GET requests again blindly
  -lodash lib helps with memoizing.
  _.memoize

  Ref: 
    https://www.udemy.com/course/react-redux/learn/lecture/12586922#overview

  -But, here, we are trying to combine both post and userID memoizing in one function.

  Actual method is similar to:
        export const fetchPostsAndUsers = () => async (dispatch, getState) => {
          await dispatch(fetchPosts());

          _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value();
        };

  This is what we are doing:      
    -get all posts
    -find unique postIds
    -then make for each one, call fetchUser()

*/
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());//knote: passing function to redux dispatch. for redux thunk, because its async

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
/*
knote: above is shortened syntactical sugar of following code:
ref: https://www.udemy.com/course/react-redux/learn/lecture/12586868#questions/9351751

export const fetchUser = (id) => {
  return async function(dispatch) { //another optional argument is getState, but since we are not using it, we omitted it
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
  };
}


*/

//knote: memoized example
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
